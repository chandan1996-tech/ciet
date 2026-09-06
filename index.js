// Import the 'fs' module
const fs = require('fs');
const path = require('path');

// Define file and folder names
const folderName = 'myFolder';
const fileName = path.join(folderName, 'example.txt');

// 1. Create a new directory
fs.mkdir(folderName, { recursive: true }, (err) => {
  if (err) throw err;
  console.log('✅ Directory created.');

  // 2. Write to a new file
  fs.writeFile(fileName, 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('✅ File created and written.');

    // 3. Read the file
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('📄 File content:', data);

      // 4. Append to the file
      fs.appendFile(fileName, '\nAppended text.', (err) => {
        if (err) throw err;
        console.log('✅ Text appended.');

        // 5. Read again after appending
        fs.readFile(fileName, 'utf8', (err, updatedData) => {
          if (err) throw err;
          console.log('📄 Updated file content:', updatedData);

          
          });
        });
      });
    });
  });

