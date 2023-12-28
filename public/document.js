const socket = io()

const textEditor = document.getElementById('editor-texto')

textEditor.addEventListener('keyup', () => {
  socket.emit('text_editor', textEditor.value)
})

socket.on('text_editor_clients', text => {
  console.log({text})
  textEditor.value = text
})