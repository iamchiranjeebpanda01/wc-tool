const process = require("process");
const fs = require("fs");

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
        /*
            The fs.stat() method is used to return information about the given file or directory. 
            It returns an fs.Stat object which has several properties and methods to get details about the file or directory.
        */
        {
            fs.stat(filepath, (err, stats) => {
                if(err){
                    console.error("Error in reading file stats")
                }
                else{
                    console.log(`${stats.size} ${filepath}`)
                }
            })
            break;
        }

        //! Outputs the number of lines in the file
        case "-l":
        /*
            fs.readFile() is a fundamental tool for reading data from files asynchronously.
            The method accepts three parameters as mentioned above and described below:  
                -> file_path: It holds the file’s name to read or the entire path if stored at another location.
                -> encoding: It holds the encoding of the file. Its default value is ‘utf8’.
                -> callback_function: A callback function is called after reading the file. It takes two parameters:
                                    - err: If any error occurred.
                                    - data: Contents of the file.
        */
        {
            fs.readFile(filepath, 'utf-8', (err, data) => {
                if(err){
                    console.error("Error in reading file")
                }
                else{
                    // Split the string at newline characters
                    const lines = data.split('\n')
                    console.log(`${lines.length} ${filepath}`)
                }
            })
            break;
        }

        //! Outputs the number of words in the file
        case "-w":
        {
            fs.readFile(filepath, 'utf-8', (err, data) => {
                if(err){
                    console.error("Error in reading file")
                }
                else{
                    // Split the string at whitespace characters, including multiple spaces, tabs, and newlines.
                    const words = data.split(/\s+/)

                    // Filter out empty strings and words with zero length.
                    const wordCount = words.filter(word => word.length>0).length
                    console.log(`${wordCount} ${filepath}`)
                }
            })
            break;
        }

        case "-m":
        {
            fs.readFile(filepath, 'utf-8', (err, data) => {
                if(err){
                    console.error("Error in reading file")
                }
                else{
                    const characters = data.trim().length
                    console.log(`${characters} ${filepath}`)
                }
            })
            break;
        }
    }
}
else{
    //! Outputs the number of bytes, lines and words


}
