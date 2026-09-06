// // // const fs = require('fs');
// // // const readline = require('readline');
// // // const path = require('path');

// // // // Setup readline interface
// // // const rl = readline.createInterface({
// // //   input: process.stdin,
// // //   output: process.stdout
// // // });

// // // // Ask user for input
// // // rl.question('Enter some text to write into the file: ', (userInput) => {
// // //   const folderName = 'myFolder';
// // //   const fileName = path.join(folderName, 'example.txt');

// // //   // Create folder if it doesn't exist
// // //   fs.mkdir(folderName, { recursive: true }, (err) => {
// // //     if (err) throw err;

// // //     // Write user input to file
// // //     fs.writeFile(fileName, userInput, (err) => {
// // //       if (err) throw err;
// // //       console.log('✅ File created and written with your input.');

// // //       // Optional: Read it back to confirm
// // //       fs.readFile(fileName, 'utf8', (err, data) => {
// // //         if (err) throw err;
// // //         console.log('📄 File content:', data);
// // //         rl.close();
// // //       });
// // //     });
// // //   });
// // // });
// // const fs = require('fs/promises');
// // const path = require('path');

// // async function logUserActivity(userId, action) {
// //   const date = new Date().toISOString().split('T')[0]; // e.g., "2025-07-30"
// //   const logDir = path.join(__dirname, 'logs', date);
// //   const logFile = path.join(logDir, 'activity.log');

// //   try {
// //     // Ensure the log directory exists
// //     await fs.mkdir(logDir, { recursive: true });

// //     const logEntry = `[${new Date().toISOString()}] User ${userId} ${action}\n`;

// //     // Append log entry to the file
// //     await fs.appendFile(logFile, logEntry, 'utf-8');

// //     console.log(`Logged activity for user ${userId}`);
// //   } catch (err) {
// //     console.error('Failed to log activity:', err);
// //   }
// // }

// // // Example usage
// // logUserActivity(42, 'logged in');
// // logUserActivity(49, 'uploaded a file');

// // const fs = require('fs/promises');

// // async function main() {
// //   try {
// //     await fs.writeFile('example.txt', 'This is a test.');
// //     const content = await fs.readFile('example.txt', 'utf-8');
// //     console.log(content);
// //   } catch (err) {
// //     console.error('Error:', err);
// //   }
// // }

// // main();
// // const fs = require('fs/promises');
// // const path = require('path');

// // async function logUserActivity(userId, action) {
// //   const date = new Date().toISOString().split('T')[0]; // e.g., "2025-07-30"
// //   const logDir = path.join(__dirname, 'logs', date);
// //   const logFile = path.join(logDir, 'activity.log');

// //   try {
// //     // Ensure the log directory exists
// //     await fs.mkdir(logDir, { recursive: true });

// //     const logEntry = `[${new Date().toISOString()}] User ${userId} ${action}\n`;

// //     // Append log entry to the file
// //     await fs.appendFile(logFile, logEntry, 'utf-8');

// //     console.log(`Logged activity for user ${userId}`);
// //   } catch (err) {
// //     console.error('Failed to log activity:', err);
// //   }
// // }

// // // Example usage
// // logUserActivity(42, 'logged in');
// // logUserActivity(42, 'uploaded a file');
// const fs = require('fs/promises');
// const path = require('path');

// async function logUserActivity(userId, action) {
//   const date = new Date().toISOString().split('T')[0]; // e.g., "2025-07-30"
//   const logDir = path.join(__dirname, 'logs', date);
//   const logFile = path.join(logDir, 'activity.txt'); // Changed from .log to .txt

//   try {
//     // Ensure the log directory exists
//     await fs.mkdir(logDir, { recursive: true });

//     const logEntry = `[${new Date().toISOString()}] User ${userId} ${action}\n`;

//     // Append log entry to the file
//     await fs.appendFile(logFile, logEntry, 'utf-8');

//     console.log(`Logged activity for user ${userId}`);
//   } catch (err) {
//     console.error('Failed to log activity:', err);
//   }
// }

// // Example usage
// logUserActivity(42, 'logged in');
// logUserActivity(42, 'uploaded a file');

// const fs = require('fs');
// const readStream = fs.createReadStream('example.txt', { encoding: 'utf8' });

// readStream.on('data', (chunk) => {
//   console.log('Received chunk:', chunk);
// });

// readStream.on('end', () => {
//   console.log('No more data.');
// });
// const fs = require('fs');
// const writeStream = fs.createWriteStream('output.txt');

// writeStream.write('Hello Stream!\n');
// writeStream.write('Writing another line.\n');
// writeStream.end(); // Finish writing
// const fs = require('fs');

// // Create readable stream from input file
// const readable = fs.createReadStream('input.txt');

// // Create writable stream to output file
// const writable = fs.createWriteStream('output.txt');

// // Pipe readable stream to writable stream
// readable.pipe(writable);

// // Optional: Listen to events
// writable.on('finish', () => {
//   console.log('File copied successfully.');
// });
// const http = require('http'); // Import the HTTP module

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' }); // HTTP status & headers
//     res.write('Hello, this is my first Node.js server using HTTP module!');
//     res.end(); // End the response
// });

// // Server listens on port 3000
// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     if (req.url === '/') {
//         res.write('<h1>Home Page</h1>');
//     } else if (req.url === '/about') {
//         res.write('<h1>About Us</h1>');
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.write('<h1>404 Not Found</h1>');
//     }
//     res.end();
// });

// server.listen(3000, () => {
//     console.log('Server running on http://localhost:3000/');
// });
const http = require('http'); // Import the HTTP module

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // HTTP status & headers
    res.write('Hello, this is my first Node.js server using HTTP module!');
    res.end(); // End the response
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});



