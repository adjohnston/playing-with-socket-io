const Hapi = require('hapi')
const io = require('socket.io')

const server = new Hapi.Server()

server.connection({port: 3000, host: 'localhost'})

socket = io(server.listener)
socket.on('connection', socket => {
  console.log('connected');
  socket.on('test', () => {
    socket.emit('tested', {msg: 'Did you get it?'})
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
