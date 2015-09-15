/**
 * Created by JetBrains WebStorm.
 * User: Henka
 * Date: 14.02.12
 */

var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n' + process.version);
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
