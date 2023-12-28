import './socket-front-index.js'

const listDocuments = document.getElementById('lista-documentos')

function insertLinkDocument(documentName) {
  listDocuments.innerHTML += `
    <a 
      href="documento.html?nome=${documentName}" 
      class="list-group-item list-group-item-action"
    >
      ${documentName}
    </a>
  `
}

export { insertLinkDocument }
