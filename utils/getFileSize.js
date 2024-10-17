const fs = require('fs');

/**
 * This function retrieves the size of a file in bytes.
 *
 * @param {string} filepath - The path to the file for which to retrieve the size.
 * @returns {Promise<number>} A promise that resolves with the size of the file in bytes, or rejects with an error message.
 *
 * @example
 * getFileStats('/path/to/file.txt')
 *   .then((size) => {
 *     console.log(`File size: ${size} bytes`);
 *   })
 *   .catch((error) => {
 *     console.error(error);
 *   });
 */
function getFileStats(filepath){
    return new Promise((resolve, reject) => {
    fs.stat(filepath, (err, stats) => {
        if(err){
            reject("Error in reading file stats")
        }
        else{
            resolve(stats.size)  
        }
    })
})}

module.exports = {getFileStats}