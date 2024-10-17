/**
 * This function reads a file asynchronously and returns the number of lines in the file.
 *
 * @param {string} filepath - The path to the file to be read.
 * @returns {Promise<number>} A promise that resolves with the number of lines in the file.
 *                          If an error occurs during reading, the promise is rejected with an error message.
 *
 * @example
 * getLinesInFile('/path/to/file.txt')
 *   .then(numLines => console.log(`The file has ${numLines} lines.`))
 *   .catch(err => console.error(err));
 */
function getLinesInFile(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if(err){
                reject("Error in reading file")
            }
            else{
                // Split the string at newline characters
                const lines = data.split('\n')
                resolve(lines.length)
            }
        })
    })
}