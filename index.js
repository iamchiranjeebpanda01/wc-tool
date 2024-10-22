#!/usr/bin/env node

const process = require("process");
const { getFileStats } = require("./utils/getFileSize.js")
const getLinesInFile = require("./utils/getLinesInFile.js");
const getWordsInFile = require("./utils/getWordsInFile.js");
const getCharsInFile = require("./utils/getCharsInFile.js");
const getSizeLinesAndWords = require("./utils/getSizeLinesAndWords.js");
const checkfilePathIsValid = require("./utils/checkFilePathIsValid.js");

/*
The process.argv property is an inbuilt application programming interface of the process module which is used to get 
the arguments passed to the node.js process when run in the command line.

    -> process.argv[0]: is the process execution path
    -> process.argv[1]: is the path for the js file.
    -> process.argv[2] and more: other items in the array are the additional arguments passed by the user.
*/
//Todo: Use vitest to write unit tests for all the functions
const args = process.argv.slice(2)
const options = args[0]



if(args[0] !== undefined && args[1] !== undefined){
    //TODO Check if File path is valid or not
    filepath = args[1]

    checkfilePathIsValid(filepath)
    .then((isValid) => {
        if(isValid){
            switch(options){
                //! Outputs the number of bytes in the file
                case "-c": 
                {
                    getFileStats(filepath)
                    .then(size => console.log(`${size} ${filepath}`))
                    .catch(err => {
                        console.error(err)
                        process.exit(1)
                    })
                    break;
                }
        
                //! Outputs the number of lines in the file
                case "-l":
                {
                    getLinesInFile(filepath)
                    .then((lines) => {console.log(`${lines} ${filepath}`)})
                    .catch((err) => {
                        console.error(err)
                        process.exit(1)
                    })
                    break;
                }
        
                //! Outputs the number of words in the file
                case "-w":
                {
                    getWordsInFile(filepath)
                    .then((words) => {console.log(`${words} ${filepath}`)})
                    .catch((err) => {
                        console.error(err)
                        process.exit(1)
                    })
                    break;
                }
        
                case "-m":
                {
                    getCharsInFile(filepath)
                    .then((chars) => {console.log(`${chars} ${filepath}`)})
                    .catch((err) => {
                        console.error(err)
                        process.exit(1)
                    })
                    break;
                }
            }
        }
        else{
            console.error("Invalid file path")
            process.exit(1)
        }
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
}
else if(args[1] == undefined && args[0] !== undefined) {
    //! Outputs the number of bytes, lines and words
    filepath = args[0]

    checkfilePathIsValid(filepath)
    .then((isValid) => {
        if(isValid){
            getSizeLinesAndWords(filepath)
        }
        else{
            console.error("Invalid file path")
            process.exit(1)
        }
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
}
