// const fs = require('fs');
// const zlib = require('zlib');

// // === 1. Readable Stream ===
// const readStream = fs.createReadStream('input.txt', { encoding: 'utf8' });

// readStream.on('data', (chunk) => {
//   console.log('>> Reading chunk:');
//   console.log(chunk);
// });

// readStream.on('end', () => {
//   console.log('>> Finished reading input.txt');
// });

// // === 2. Writable Stream ===
// const writeStream = fs.createWriteStream('output.txt');

// writeStream.write('This is written using a writable stream.\n');
// writeStream.write('Let\'s add another line.\n');
// writeStream.end('Stream writing complete.\n');

// // === 3. Pipe (Read ➝ Write) ===
// const pipeRead = fs.createReadStream('input.txt');
// const pipeWrite = fs.createWriteStream('output.txt');

// pipeRead.pipe(pipeWrite);

// // === 4. Transform Stream (Gzip Compression) ===
// const gzip = zlib.createGzip();
// const source = fs.createReadStream('input.txt');
// const destination = fs.createWriteStream('input.txt.gz');

// source.pipe(gzip).pipe(destination);

// console.log('>> Stream operations started...');
const fs = require('fs');

const readable = fs.createReadStream('input.txt');
const writable = fs.createWriteStream('output.txt');

readable.pipe(writable);
console.log('>> Piping from input.txt to output.txt');
readable.on('end', () => {
  console.log('>> Finished piping data.');
});
readable.on('error', (err) => {
  console.error('>> Error reading from input.txt:', err);
});
writable.on('error', (err) => {
  console.error('>> Error writing to output.txt:', err);
});
// Example of piping a readable stream to a writable stream
// This code reads from 'input.txt' and writes to 'output.txt' using streams
// Make sure to handle errors for both streams
// Ensure 'input.txt' exists before running this code
// You can also add more complex operations like transforming data or compressing it
// by using transform streams or zlib for compression
