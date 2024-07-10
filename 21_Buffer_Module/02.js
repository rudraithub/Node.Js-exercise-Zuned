const inputString = "Hello, World!";

// Create a buffer from the input string
const buffer = Buffer.from(inputString);
console.log('Original Buffer:', buffer);

// Get the length of the buffer
console.log('Buffer Length:', buffer.length);

// Convert buffer to a string
console.log('Buffer as String:', buffer.toString());

// Modify the buffer
const modifiedBuffer = Buffer.from("GoodbyeWorld!");
console.log('Modified Buffer:', modifiedBuffer.toString());

// Slice the buffer
const slicedBuffer = modifiedBuffer.slice(0, 5);
console.log('Sliced Buffer:', slicedBuffer.toString());

// Concatenate buffers
const additionalBuffer = Buffer.from(" Node.js");
const concatenatedBuffer = Buffer.concat([modifiedBuffer, additionalBuffer]);
console.log('Concatenated Buffer:', concatenatedBuffer.toString());

// Compare buffers
const comparisonResult = buffer.compare(modifiedBuffer);
console.log('Compare Buffers:', comparisonResult);

// Copy part of the buffer
const copiedBuffer = Buffer.alloc(10);
modifiedBuffer.copy(copiedBuffer, 0, 0, 10);
console.log('Copied Buffer:', copiedBuffer.toString());

// Fill the buffer
const filledBuffer = Buffer.alloc(10, 'A');
console.log('Filled Buffer:', filledBuffer.toString());

// Check if buffer includes a substring
console.log('Includes "Hello":', modifiedBuffer.includes("Hello"));
console.log('Includes "Goodbye":', modifiedBuffer.includes("Goodbye"));

// Convert buffer to JSON
const bufferJson = JSON.stringify(modifiedBuffer);
console.log('Buffer as JSON:', bufferJson);

// Convert buffer from JSON
const bufferFromJson = Buffer.from(JSON.parse(bufferJson).data);
console.log('Buffer from JSON:', bufferFromJson.toString());
