import { insertLinkDocument, removerLinkDocument } from './index.js'

const socket = io();

socket.emit('get_documents', (documents) => {
  console.log(documents)
  documents.forEach(document => {
    insertLinkDocument(document.name)
  })
})

socket.on('insert_document_interface', (name) => {
  insertLinkDocument(name)
})

socket.on('document_exists', (name) => {
  alert(`O documento ${name} já existe`)
})


socket.on('delete_document_success', (name) => {
  removerLinkDocument(name)
})

function emitAddDocument(name) {
  socket.emit('add_document', name)
}


export { emitAddDocument }