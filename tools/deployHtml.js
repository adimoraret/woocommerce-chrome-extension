import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console */
function buildHtml(sourceHtmlFile, destHtmlFile) {
    fs.readFile(sourceHtmlFile, 'utf8', (err, markup) => {
        if (err) {
            return console.log(err);
        }
        const $ = cheerio.load(markup);
        fs.writeFile(destHtmlFile, $.html(), 'utf8', function (err) {
            if (err) {
            return console.log(err);
            }
            console.log(`Generating ${destHtmlFile}`.green);
        });
    });
}

function createEmptyFile(destFile){
    fs.writeFile(destFile, "", function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(`Generating ${destFile}`.green);
    });
}


buildHtml('src/index.html','dist/index.html');
createEmptyFile('dist/options.html');