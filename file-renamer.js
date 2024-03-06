const fs = require('fs');
const path = require('path');

// Specify the directory path where the files are located
const directoryPath = 'C:/Users/Desktop/';

// Read files in the directory
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    // Sort files alphabetically
    files.sort();

    // Initialize a counter for file naming
    let count = 1;

    // Iterate through each file
    files.forEach(function (file) {
        // Construct the new file name
        let newFileName = count.toString().padStart(4, '0') + path.extname(file);

        // Construct the full path for the original and new files
        let oldFilePath = path.join(directoryPath, file);
        let newFilePath = path.join(directoryPath, newFileName);

        // Rename the file
        fs.rename(oldFilePath, newFilePath, function (err) {
            if (err) throw err;
            console.log(`Renamed ${file} to ${newFileName}`);
        });

        // Increment the counter
        count++;
    });
});
