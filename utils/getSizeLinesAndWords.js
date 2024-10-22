const { getFileStats } = require("./getFileSize.js")
const getLinesInFile = require("./getLinesInFile.js");
const getWordsInFile = require("./getWordsInFile.js");


const getSizeLinesAndWords = async (filepath) => {
    let sizeOfFile;
    let lines;
    let words;

    try{
        sizeOfFile = await getFileStats(filepath)
        lines = await getLinesInFile(filepath)
        words = await getWordsInFile(filepath)
    } catch(err){
        console.error(err)
        process.exit(1)
    }

    console.log(`${sizeOfFile} ${lines} ${words} ${filepath}`)
}

module.exports = getSizeLinesAndWords