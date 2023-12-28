import express from 'express';
import url from 'url'
import path from 'path';
import http from 'http'
import {Server} from 'socket.io'

const app = express()

const port = process.env.PORT || 3333

const currentPath = url.fileURLToPath(import.meta.url)
const pathPublic = path.join(currentPath, '../..', 'public')

app.use(express.static(pathPublic))

const serverHttp = http.createServer(app)

serverHttp.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

const io = new Server(serverHttp)

io.on('connection', socket => {
  console.log(`Socket conectado: ${socket.id}`)
})