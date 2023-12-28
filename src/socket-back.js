import io from './server.js'

io.on('connection', socket => {
  console.log(`Socket conectado: ${socket.id}`)

  socket.on('text_editor', text => {
    socket.broadcast.emit('text_editor_clients', text)
    console.log(`Texto: ${text}`)
  })
})