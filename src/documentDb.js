import {documentsCollection} from './db-connect.js'

function getDocuments() {
  const documents = documentsCollection.find().toArray()

  return documents

}

function addDocument(name) {
  const result = documentsCollection.insertOne({name, text: ''})

  return result
}

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

function deleteDocument(documentName) {
  const result = documentsCollection.deleteOne({name: documentName})

  return result
}

export { findDocument, updateDocument, getDocuments, addDocument, deleteDocument }