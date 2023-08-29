/*
/// buffer hishebe ashbe
const fs = require('fs');

const var1 = fs.createReadStream(`${__dirname}/big_data.txt`);
var1.on('data', (chunk) => {
    console.log(chunk);
});
*/
/// chunk hishebe buffer ashbe text file theke
/// / utf-8 encoding
/*
/// string hishebe ashbe
const fs = require('fs');

const var1 = fs.createReadStream(`${__dirname}/big_data.txt`,'utf-8');
var1.on('data', (chunk) => {
    console.log(chunk);
});
*/

/// /another string print
const fs = require('fs');

const var1 = fs.createReadStream(`${__dirname}/big_data.txt`);
var1.on('data', (chunk) => {
    console.log(chunk.toString());
});
