import io from './server.js'

io.on('connection', socket => {
  console.log(`Socket conectado: ${socket.id}`)

  socket.on("disconnect", (motivo) => {
    console.log(`Cliente "${socket.id}" desconectado!
    Motivo: ${motivo}`);
  });

  socket.on('select_document', documentName => {
    socket.join(documentName)
  })

  socket.on('text_editor', ({text, documentName}) => {
    // socket.broadcast.emit('text_editor_clients', text)
    socket.to(documentName).emit('text_editor_clients', text)
  })
})


