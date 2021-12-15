const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.end('Hello World');
// res.setHeader('Content-Type', 'text/plain');

res.setHeader('Content-Type', 'text/html');
res.end('<html><body><h1>This is HTML</h1></body></html>');


  res.end(``);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});