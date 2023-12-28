import { insertLinkDocument } from './index.js'

const socket = io();

socket.emit('get_documents', (documents) => {
  console.log(documents)
  documents.forEach(document => {
    insertLinkDocument(document.name)
  })
})