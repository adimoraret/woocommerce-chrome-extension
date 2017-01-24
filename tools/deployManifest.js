import fs from 'fs';
import colors from 'colors';
/* eslint-disable no-console */
fs.readFile('manifest.json', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    fs.writeFile('dist/manifest.json', data, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Generating dist/manifest.json'.green);
    });
});
