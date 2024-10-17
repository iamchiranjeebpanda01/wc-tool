const fs = require('fs');

/**
 * Reads a file and returns the number of characters (excluding whitespace) in the file.
 *
 * @param {string} filepath - The path to the file to be read.
 * @returns {Promise<number>} A promise that resolves with the number of characters in the file,
 * or rejects with an error message if there is an issue reading the file.
 *
 * @example
 * getCharsInFile('/path/to/file.txt')
 *   .then(characters => {
 *     console.log(`The file contains ${characters} characters.`);
 *   })
 *   .catch(error => {
 *     console.error('Error:', error);
 *   });
 */
function getCharsInFile(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if(err){
                reject("Error in reading file")
            }
            else{
                const characters = data.trim().length
                resolve(characters)
            }
        })
    })
}

module.exports = getCharsInFile