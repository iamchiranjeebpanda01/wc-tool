const fs = require('fs')

function checkfilePathIsValid(filePath) {
    return new Promise((resolve, reject) => {
        fs.stat(filepath, (err, stats) => {
            if(err){
                reject("Error in reading file stats")
            }
            else{
                resolve(stats.isFile())  
            }
        })
    })
}

module.exports = checkfilePathIsValid