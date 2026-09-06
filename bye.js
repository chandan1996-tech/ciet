const fs = require('fs');

console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => {
  console.log('setImmediate');
});

fs.readFile(__filename, () => {
  console.log('File read completed');
});

console.log('End');
