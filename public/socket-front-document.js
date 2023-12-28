import { updateTextEditor, alertRedirect } from './document.js'

const socket = io()

function SelectDocument(paramsDocumentName) {
  socket.emit('select_document', paramsDocumentName, (text) => {
    updateTextEditor(text)
  })
}

function emitTextEditor({text, documentName}) {
  socket.emit('text_editor', {text, documentName})
}

socket.on('text_editor_clients', text => {
  updateTextEditor(text)
})

function emitDeleteDocument(documentName) {
  socket.emit('delete_document', documentName)
}

socket.on('delete_document_success', documentName => {
  alertRedirect(documentName)
})

export { emitTextEditor, SelectDocument, emitDeleteDocument }