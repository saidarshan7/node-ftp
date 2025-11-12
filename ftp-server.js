//fs (file system use cases) :reading, writing, creating, updating, deleting, and renaming files and directories.


const fs = require('fs');
const {pipeline} = require('stream/promises');
const {Readable} = require('stream');

async function writeLargeFile() {
    // const data = await fs.readFile('input.txt', 'utf8');
    // const readable = Readable.from(data);
    // const writable = fs.createWriteStream('largeFile.txt');

     const readable = fs.createReadStream('input.txt'); // correct way
     const writable = fs.createWriteStream('largeFile.txt');

    await pipeline(readable,writable);
    console.log("large file written successfully!!");

}

writeLargeFile();

// async function readFileExample() {

//     const data = await fs.readFile('myFile.txt','utf8');
//     console.log(data);
// }

// readFileExample();

