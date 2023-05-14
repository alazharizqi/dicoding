const fs = require('fs');

const readableStream = fs.createReadStream('./input.txt', {
    highWaterMark: 15
})

const writeableStream = fs.createWriteStream('output.txt');

readableStream.on('readable', () => {
    try {
        process.stdout.write(`${readableStream.read()}\n`);
    } catch (error) {
        
    }
});

readableStream.on('end', () => {
    console.log('Done');
})

writeableStream.write('Lorem ipsum dol\n');
writeableStream.write('or sit amet, co\n');
writeableStream.write('nsectetur adipi\n');
writeableStream.write('scing elit, sed\n');
writeableStream.write(' do eiusmod tem\n');
writeableStream.write('DLL\n');
