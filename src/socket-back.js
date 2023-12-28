import io from './server.js'

const documents = [
  {
    name: "JavaScript",
    text: "Texto JavaScript"
  },
  {
    name: "Node",
    text: "Texto Node"
  },
  {
    name: "Socket.io",
    text: "Texto Socket.io"
  },
]

io.on('connection', socket => {
  console.log(`Socket conectado: ${socket.id}`)

  // socket.on("disconnect", (motivo) => {
  //   console.log(`Cliente "${socket.id}" desconectado!
  //   Motivo: ${motivo}`);
  // });

  socket.on('select_document', (documentName, returnTextDocument) => {
    socket.join(documentName)

    const document = findDocument(documentName)

    if (document) {
      returnTextDocument(document.text)
    }
  })

  socket.on('text_editor', ({text, documentName}) => {
    const document = findDocument(documentName)

    if (document) {
      document.text = text
      socket.to(documentName).emit('text_editor_clients', text)
    }
  })
})


function findDocument(documentName) {
  const document = documents.find(document => document.name === documentName)

  return document
}

