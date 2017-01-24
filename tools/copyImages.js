import fs from 'fs';
import colors from 'colors';

function copyFile(srcFile, destFile){
    fs.createReadStream(srcFile).pipe(fs.createWriteStream(destFile));
    /* eslint-disable no-console */
    console.log(`Copied ${srcFile} to ${destFile}`.green);
    /* eslint-enable no-console */    
}

copyFile('images/icon.png','dist/images/icon.png');