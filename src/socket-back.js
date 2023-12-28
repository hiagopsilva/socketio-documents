import io from './server.js'

import {findDocument, updateDocument, getDocuments} from './documentDb.js'

io.on('connection', socket => {
  console.log(`Socket conectado: ${socket.id}`)

  socket.on('get_documents', async (setDocuments) => {
    console.log('get_documents')
    const document = await getDocuments()

    setDocuments(document)
  })
  // socket.on("disconnect", (motivo) => {
  //   console.log(`Cliente "${socket.id}" desconectado!
  //   Motivo: ${motivo}`);
  // });

  socket.on('select_document', async (documentName, returnTextDocument) => {
    socket.join(documentName)

    const document = await findDocument(documentName)

    if (document) {
      returnTextDocument(document.text)
    }
  })

  socket.on('text_editor', async ({text, documentName}) => {
    const document = await updateDocument(documentName, text)

    if (document.modifiedCount) {
      document.text = text
      socket.to(documentName).emit('text_editor_clients', text)
    }
  })
})



