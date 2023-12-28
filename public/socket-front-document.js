import { updateTextEditor } from './document.js'

const socket = io()

function SelectDocument(paramsDocumentName) {
  socket.emit('select_document', paramsDocumentName)
}

function emitTextEditor(text) {
  socket.emit('text_editor', text)
}

socket.on('text_editor_clients', text => {
  updateTextEditor(text)
})

export { emitTextEditor, SelectDocument }