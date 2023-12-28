import {documentsCollection} from './db-connect.js'


function findDocument(documentName) {
  const document = documentsCollection.findOne({name: documentName})

  return document
}

function updateDocument(documentName, text) {
  const updateDocument = documentsCollection.updateOne({name: documentName}, {
    $set: {text}
  })

  return updateDocument
}

export { findDocument, updateDocument }