const process = require("process");
const fs = require("fs");

/*
The process.argv property is an inbuilt application programming interface of the process module which is used to get 
the arguments passed to the node.js process when run in the command line.

    -> process.argv[0]: is the process execution path
    -> process.argv[1]: is the path for the js file.
    -> process.argv[2] and more: other items in the array are the additional arguments passed by the user.
*/

/*
The fs.stat() method is used to return information about the given file or directory. 
It returns an fs.Stat object which has several properties and methods to get details about the file or directory.
*/

const args = process.argv.slice(2)
const options = args[1]



if(args[0] === "ccwc" && args[2] !== undefined){
    switch(options){
        //! Outputs the number of bytes in the file
        case "-c": 
        {
            break;
        }

        //! Outputs the number of lines in the file
        case "-l":
        {
            break;
        }

        //! Outputs the number of words in the file
        case "-w":
        {
            break;
        }
    }
}
else{
    //! Outputs the number of bytes, lines and words
    

}
