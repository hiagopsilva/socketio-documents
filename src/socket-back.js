import io from './server.js'

import {documentsCollection} from './db-connect.js'

io.on('connection', socket => {
  console.log(`Socket conectado: ${socket.id}`)

  // socket.on("disconnect", (motivo) => {
  //   console.log(`Cliente "${socket.id}" desconectado!
  //   Motivo: ${motivo}`);
  // });

  socket.on('select_document', async (documentName, returnTextDocument) => {
    socket.join(documentName)

    const document = await findDocument(documentName)

    console.log({document})

    if (document) {
      returnTextDocument(document.text)
    }
  })

  socket.on('text_editor', async ({text, documentName}) => {
    const document = await findDocument(documentName)

    if (document) {
      document.text = text
      socket.to(documentName).emit('text_editor_clients', text)
    }
  })
})


function findDocument(documentName) {
  const document = documentsCollection.findOne({name: documentName})

  return document
}

