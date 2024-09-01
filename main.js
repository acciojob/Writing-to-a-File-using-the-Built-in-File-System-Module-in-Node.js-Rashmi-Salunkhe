const fs = require('fs');

// Message to be written to the file
const message = "Hello, World!";

// Write the message to a file named "output.txt"
fs.writeFile('output.txt', message, (err) => {
  if (err) {
    // Log the error if there is one
    console.error('An error occurred while writing to the file:', err);
    throw err; // Optionally re-throw the error
  }
  console.log('The message was successfully written to output.txt');
});
