const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middleware= jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middleware)
server.use(router)

const port=2020

server.listen(port,()=>{
console.log("JSON server listening on port 2020 ")
})
