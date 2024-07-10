const zlib = require('zlib');

// Input data
const inputData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

// Compress data
zlib.deflate(inputData, (err, compressedData) => {
  if (err) {
    console.error('Error compressing data:', err);
    return;
  }
  console.log('Compressed data:', compressedData);

  // Decompress data
  zlib.inflate(compressedData, (err, decompressedData) => {
    if (err) {
      console.error('Error decompressing data:', err);
      return;
    }
    console.log('Decompressed data:', decompressedData.toString());
  });
});
