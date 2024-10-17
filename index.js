const process = require("process");
const fs = require("fs");
const { getFileStats } = require("./utils/getFileSize.js")
const getLinesInFile = require("./utils/getLinesInFile.js");
const getWordsInFile = require("./utils/getWordsInFile.js");
const getCharsInFile = require("./utils/getCharsInFile.js");

/*
The process.argv property is an inbuilt application programming interface of the process module which is used to get 
the arguments passed to the node.js process when run in the command line.

    -> process.argv[0]: is the process execution path
    -> process.argv[1]: is the path for the js file.
    -> process.argv[2] and more: other items in the array are the additional arguments passed by the user.
*/

const args = process.argv.slice(2)
const options = args[1]



if(args[0] === "ccwc" && args[2] !== undefined){
    filepath = args[2]
    switch(options){
        //! Outputs the number of bytes in the file
        case "-c": 
        {
            getFileStats(filepath)
            .then(size => console.log(`${size} ${filepath}`))
            .catch(err => console.error(err))
            break;
        }

        //! Outputs the number of lines in the file
        case "-l":
        {
            getLinesInFile(filepath)
            .then((lines) => {console.log(`${lines} ${filepath}`)})
            .catch((err) => {console.error(err)})
            break;
        }

        //! Outputs the number of words in the file
        case "-w":
        {
            getWordsInFile(filepath)
            .then((words) => {console.log(`${words} ${filepath}`)})
            .catch((err) => {console.error(err)})
            break;
        }

        case "-m":
        {
            getCharsInFile(filepath)
            .then((chars) => {console.log(`${chars} ${filepath}`)})
            .catch((err) => {console.error(err)})
            break;
        }
    }
}
else{
    //! Outputs the number of bytes, lines and words


}
