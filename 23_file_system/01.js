const fs = require('fs');
const path = require('path');

const filename = 'data.txt';
const filePath = path.join(__dirname, filename);


const initialData = 'Hello, World!';


fs.writeFile(filePath, initialData, (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }
  console.log('File created successfully.');
  console.log('File content:', initialData);

  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:', data);


    const updatedData = data + '\nNew data appended.';
    fs.writeFile(filePath, updatedData, (err) => {
      if (err) {
        console.error('Error updating file:', err);
        return;
      }
      console.log('File updated successfully.');

      
      fs.readFile(filePath, 'utf8', (err, newData) => {
        if (err) {
          console.error('Error reading updated file:', err);
          return;
        }
        console.log('File content:', newData);

      
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
            return;
          }
          console.log('File deleted successfully.');

        
          fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
              console.log('File does not exist.');
            } else {
              console.log('File still exists.');
            }
          });
        });
      });
    });
  });
});
