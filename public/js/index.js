var socket = io();

socket.on('connect', function () {
  console.log('connected to server')

  socket.emit('createMessage', {
    from: 'jen',
    text: 'This is a message'
  })
})

socket.on('disconnect', function () {
  console.log('Disconnected from server');
})

socket.on('newMessage', function(message) {
  console.log('new message', message);
})
