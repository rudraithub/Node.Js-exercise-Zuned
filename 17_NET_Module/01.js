const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
  console.log('Connected to server.');

  client.write('Hello from client!');
});

client.on('data', (data) => {
  console.log('Received from server:', data.toString());
  client.end();
});

client.on('end', () => {
  console.log('Disconnected from server.');
});
