import React from 'react'
import { render } from 'react-dom'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3000')

const click = () => {
  socket.emit('test')
}

socket.on('connect', () => console.log('connected'))
socket.on('tested', ({msg}) => console.log('msg', msg))

const App = () => (
  <button
    onClick={click}>
    Click me to test
  </button>
)

render(<App />, document.querySelector('#app'))
