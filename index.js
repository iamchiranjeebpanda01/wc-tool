#!/usr/bin/env node
const process = require("process");
const { getFileStats } = require("./utils/getFileSize.js")
const getLinesInFile = require("./utils/getLinesInFile.js");
const getWordsInFile = require("./utils/getWordsInFile.js");
const getCharsInFile = require("./utils/getCharsInFile.js");
const getSizeLinesAndWords = require("./utils/getSizeLinesAndWords.js");
const checkfilePathIsValid = require("./utils/checkFilePathIsValid.js");


//Todo: Use vitest to write unit tests for all the functions
const args = process.argv.slice(2);
const options = args[0];
let inputData = '';
let haveInputFromPipe = false;

//! Code that handles input being piped into our command
if(!process.stdin.isTTY){
    let inputSize = 0
    process.stdin.on('data', (chunk) => {
        inputData += chunk;
        inputSize += Buffer.byteLength(chunk);
        haveInputFromPipe = true;
    })
    
    process.stdin.on('end', () => {
        const lines = inputData.split('\n').length;
        const words = inputData.split(/\s+/).filter(word => word.length>0).length;
        const chars = inputData.trim().length
        switch(options){
            case "-c":
                {
                    console.log(inputSize)
                    break;
                }

            case "-l":
                {
                    console.log(lines)
                    break;
                }

            case "-w":
                {
                    console.log(words)
                    break;
                }

            case "-m":
                {
                    console.log(chars)
                    break;
                }

            case undefined:
                {
                    console.log(`${inputSize} ${lines} ${words}`)
                }
        }
    })
}


//! Code that handles file passed in as argument in the command line.
setTimeout(() => {
    if(!haveInputFromPipe){
        if(args[0] !== undefined && args[1] !== undefined){
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
    }
}, 50)




