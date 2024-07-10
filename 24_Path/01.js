const path = require('path');

// Example path
const filePath = '/path/to/file.txt';

// 1. basename
const basename = path.basename(filePath);
console.log(`1. basename: ${basename}`);

// 2. dirname
const dirname = path.dirname(filePath);
console.log(`2. dirname: ${dirname}`);

// 3. extname
const extname = path.extname(filePath);
console.log(`3. extname: ${extname}`);

// 4. isAbsolute
const isAbsolute = path.isAbsolute(filePath);
console.log(`4. isAbsolute: ${isAbsolute}`);

// 5. join
const joinedPath = path.join('/path', 'to', 'file.txt');
console.log(`5. join: ${joinedPath}`);

// 6. normalize
const normalizedPath = path.normalize('/path/to/folder/file.txt');
console.log(`6. normalize: ${normalizedPath}`);

// 7. parse
const parsedPath = path.parse(filePath);
console.log(`7. parse: ${JSON.stringify(parsedPath, null, 2)}`);

// 8. resolve
const resolvedPath = path.resolve(__dirname, 'path', 'to', 'file.txt');
console.log(`8. resolve: ${resolvedPath}`);
