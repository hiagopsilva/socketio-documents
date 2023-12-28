const socket = io()

const textEditor = document.getElementById('editor-texto')

textEditor.addEventListener('keyup', () => {
  socket.emit('text_editor', textEditor.value)
})