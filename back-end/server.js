const http = require('http');
const server = http.createServer((request, response) => {
    const { method, url } = request;
    if (url === '/' && method === 'GET') {
      response.setHeader('Content-Type', 'application/json');
      response.statusCode = 200;
      response.write(JSON.stringify({ msg: 'Server up and running' }));
      response.end();
    }
    if (url === '/users' && method === 'GET') {
      // logic to retrieve users data and send back to the client on the response body
    }
    if (url === '/users' && method === 'POST') {
//         let body = '';
// request.on('data', (packet) => {
//   body += packet.toString();
// });
// request.on('end', () => {
//   // logic to handle the body from the request and update the data
// });

      // logic to add the new user from the request body to the data and send the appropriate response
    }
  });
  
  server.listen(9090, (err) => {
    if (err) console.log(err);
    else console.log('Server listening on port: 9090');
  });