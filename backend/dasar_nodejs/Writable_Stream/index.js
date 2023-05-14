const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Ini baris pertama\n');
writableStream.write('Ini baris kedua\n');
writableStream.end('Akhir dari writable stream');