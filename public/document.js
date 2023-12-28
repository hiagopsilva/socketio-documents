import { emitTextEditor, SelectDocument } from './socket-front-document.js'

const paramsURL = new URLSearchParams(window.location.search)
const paramsDocumentName = paramsURL.get("nome")

const textEditor = document.getElementById('editor-texto')
const titleDocument = document.getElementById('titulo-documento')

titleDocument.textContent = paramsDocumentName || 'Documento sem título'

SelectDocument(paramsDocumentName)

textEditor.addEventListener('keyup', () => {
  emitTextEditor(textEditor.value, paramsDocumentName)
})

function updateTextEditor(text) {
  textEditor.value = text
}


export {updateTextEditor}