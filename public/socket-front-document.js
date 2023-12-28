import { updateTextEditor } from './document.js'

const socket = io()

function SelectDocument(paramsDocumentName) {
  socket.emit('select_document', paramsDocumentName)
}

function emitTextEditor(text, documentName) {
  socket.emit('text_editor', text, documentName)
}

socket.on('text_editor_clients', text => {
  updateTextEditor(text)
})

export { emitTextEditor, SelectDocument }