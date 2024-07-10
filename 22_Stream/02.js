const fs = require('fs');
const path = require('path');


const inputData = 'hello world';


const filePath = path.join(__dirname, 'output.txt');


const writeStream = fs.createWriteStream(filePath, { encoding: 'utf8' });


writeStream.write(inputData, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('Write operation completed.');
});


writeStream.end();
