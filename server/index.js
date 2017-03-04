const Hapi = require('hapi')
const Socket = require('socket.io')

const server = new Hapi.Server()

server.connection({port: 3000, host: 'localhost'})

io = Socket(server.listener)
io.on('connection', socket => {
  socket.emit('working')
  socket.on('test', () => {
    socket.emit('I live!')
  })
})

server.route({
  method: 'GET',
  path: '/',
  handler: (reques, reply) => {
    reply('Hello world')
  }
})

server.start(err => {
  if (err) throw err

  console.log(`Server running on ${server.info.uri}`)
})
