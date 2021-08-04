const fs = require('fs');

function deleteFolderRecursive(path) {

    console.log(`Deleting directory "${path}"...`);
    if (fs.existsSync(path)) {
        fs.rmSync( path, { recursive: true });
    }

}


console.log("Cleaning working tree...");

deleteFolderRecursive("./dist");

console.log("Successfully cleaned working tree!");