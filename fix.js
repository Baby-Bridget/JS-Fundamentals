const fs = require('fs');

const newCode = const myVar = 'JavaScript is amazing';\nconsole.log(myVar);;

fs.writeFile('0-javascript_is_amazing.js', newCode, (err) => {
    if (err) {
        console.log('Error fixing file:', err);
    } else {
        console.log('File fixed!');
    }
});