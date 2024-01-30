const http = require('http');

const app = http.createServer();

app.on('request', (req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
