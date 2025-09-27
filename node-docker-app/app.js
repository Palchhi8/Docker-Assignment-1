const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Send a simple response string when the server receives a request
  res.end("Hello from Dockerized Node.js app!");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});