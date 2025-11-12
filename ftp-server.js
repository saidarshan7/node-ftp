//fs (file system use cases) :reading, writing, creating, updating, deleting, and renaming files and directories.


const fs = require('fs');
const {pipeline} = require('stream/promises');

let i = 1;

async function streamMovie(){

    const data = fs.createReadStream('matrix.mkv');
    const writeable = fs.createWriteStream('mymovie.mkv');
    data.on('data', chunk => {
        console.log(`chunk ${i} `);
        i++;
    })

    // await pipeline(data,writeable);
}

streamMovie();