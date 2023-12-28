import {emitAddDocument} from './socket-front-index.js'

const listDocuments = document.getElementById('lista-documentos')
const form = document.getElementById('form-adiciona-documento')
const inputDocument = document.getElementById('input-documento')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  emitAddDocument(inputDocument.value)
  inputDocument.value = '';
})

function insertLinkDocument(documentName) {
  listDocuments.innerHTML += `
    <a 
      href="documento.html?nome=${documentName}" 
      class="list-group-item list-group-item-action"
      id="document-${documentName}"
    >
      ${documentName}
    </a>
  `
}

function removerLinkDocument(documentName) {
  const documentElement = document.getElementById(`document-${documentName}`)

  listDocuments.removeChild(documentElement)
}

export { insertLinkDocument, removerLinkDocument }
