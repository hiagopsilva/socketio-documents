import io from './server.js'

import {findDocument, updateDocument, getDocuments, addDocument, deleteDocument} from './documentDb.js'

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

  socket.on('add_document', async (name) => {
    const documentExists = (await findDocument(name)) !== null

    if (documentExists) {
      socket.emit("document_exists", name);
    } else {
      const result = await addDocument(name)

      if (result.acknowledged) {
        io.emit('insert_document_interface', name)
      }
    }

  })

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

  socket.on('delete_document', async (documentName) => {
    const deletedDocument = await deleteDocument(documentName)

    if (deletedDocument.deletedCount) {
      io.emit('delete_document_sucess', documentName)
    }
  })
})



