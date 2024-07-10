const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, 'example.txt');


const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });


readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
  console.log('End of stream.');
});

readStream.on('error', (error) => {
  console.error('Error:', error.message);
});
