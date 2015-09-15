/**
 * Created by JetBrains WebStorm.
 * User: Henka
 * Date: 14.02.12
 */


var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  , port = 1234;


app.listen(port);
console.log('Server running at http://127.0.0.1:'+port+'/');


function handler (req, res) {
  fs.readFile(__dirname + '/socketHTML.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading socketHTML.html');
    }


    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {

  function getDate(){
    socket.emit('news', { currentTime: new Date().toGMTString() });
  }
  setInterval(getDate, 1000);
  socket.on('my other event', function (data) {
    console.log('from client '+data.returnValue);
  });

});