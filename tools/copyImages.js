import fs from 'fs';
import colors from 'colors';

function copyFile(srcFile, destFile){
    fs.createReadStream(srcFile).pipe(fs.createWriteStream(destFile));
    console.log(`Copied ${srcFile} to ${destFile}`.green);
}

copyFile('images/icon.png','dist/images/icon.png');