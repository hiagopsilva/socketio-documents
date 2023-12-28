import {MongoClient} from 'mongodb';

const client = new MongoClient('mongodb+srv://hiagopsilva:hiago123@aluracluster.nhwbuvj.mongodb.net/?retryWrites=true&w=majority');

let documentsCollection;

try {
  await client.connect();
  console.log('Conectado com sucesso');

  const db = client.db('alura-websockets');
  documentsCollection = db.collection('documents');
}
catch (err) {
  console.log(err.stack);
}

export { documentsCollection }