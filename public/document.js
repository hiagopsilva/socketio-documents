import { emitTextEditor, SelectDocument, emitDeleteDocument } from './socket-front-document.js'

const paramsURL = new URLSearchParams(window.location.search)
const documentName = paramsURL.get("nome")

const textEditor = document.getElementById('editor-texto')
const titleDocument = document.getElementById('titulo-documento')
const buttonDelete = document.getElementById('excluir-documento')

titleDocument.textContent = documentName || 'Documento sem título'

SelectDocument(documentName)

textEditor.addEventListener('keyup', () => {
  emitTextEditor({text: textEditor.value, documentName})
})

buttonDelete.addEventListener('click', () => {
  emitDeleteDocument(documentName)
})
 
function updateTextEditor(text) {
  textEditor.value = text
}

function alertRedirect(name) {
  if (name === documentName) {
    alert(`O documento ${name} foi excluído.`)
    window.location.href = '/'
  }
}

export {updateTextEditor, alertRedirect}