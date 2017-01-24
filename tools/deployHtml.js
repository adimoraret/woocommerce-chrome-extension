import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console */
function buildHtml(sourceHtmlFile, destHtmlFile) {
    
    function changeBundleLocation($){
        let scriptNode = $('script')[0];
        scriptNode.attribs["src"] = "/scripts/bundle.js";
    }

    function addStylesheetNode($){
        let styleNode = $('<link rel="stylesheet" href="/scripts/styles.css"/>');
         $('head').append(styleNode);
    }
    
    fs.readFile(sourceHtmlFile, 'utf8', (err, markup) => {
        if (err) {
            return console.log(err);
        }
        const $ = cheerio.load(markup);
        changeBundleLocation($);
        addStylesheetNode($);
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