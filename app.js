let express = require('express')
let app = express()
app.use(express.static('public'))
let http = require('http').Server(app)
let io = require('socket.io')(http)

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg)
    });
  });

const PORT = process.env.PORT || 3000

http.listen(PORT, function(){
  console.log('listening on *:3000')
});