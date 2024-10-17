const fs = require('fs');

/**
 * Reads a file and returns the count of words present in the file.
 *
 * @param {string} filepath - The path to the file to be read.
 * @returns {Promise<number>} A promise that resolves with the count of words in the file.
 * If an error occurs while reading the file, the promise will be rejected with an error message.
 *
 * @example
 * getWordsInFile('/path/to/file.txt')
 *   .then(wordCount => console.log(`The file contains ${wordCount} words.`))
 *   .catch(error => console.error(error));
 */
function getWordsInFile(filepath){
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if(err){
                reject("Error in reading file")
            }
            else{
                // Split the string at whitespace characters, including multiple spaces, tabs, and newlines.
                const words = data.split(/\s+/)

                // Filter out empty strings and words with zero length.
                const wordCount = words.filter(word => word.length>0).length
                resolve(wordCount)
            }
        })
    })
}

module.exports = getWordsInFile