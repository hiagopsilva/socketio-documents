import { emitTextEditor, SelectDocument } from './socket-front-document.js'

const paramsURL = new URLSearchParams(window.location.search)
const documentName = paramsURL.get("nome")

const textEditor = document.getElementById('editor-texto')
const titleDocument = document.getElementById('titulo-documento')

titleDocument.textContent = documentName || 'Documento sem título'

SelectDocument(documentName)

textEditor.addEventListener('keyup', () => {
  emitTextEditor({text: textEditor.value, documentName})
})

function updateTextEditor(text) {
  textEditor.value = text
}


export {updateTextEditor}