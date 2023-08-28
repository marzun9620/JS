const file = require('fs');

file.writeFileSync('myFile.txt', 'Md Enamul Hoque');
file.appendFileSync('myFile.txt', ' Md Ekramul Hoque');
