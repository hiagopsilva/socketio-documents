import express from 'express';
import url from 'url'
import path from 'path';

const app = express()

const port = process.env.PORT || 3333

const currentPath = url.fileURLToPath(import.meta.url)
const pathPublic = path.join(currentPath, '../..', 'public')

app.use(express.static(pathPublic))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})