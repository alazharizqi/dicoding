const fs = require('fs');

const fileReafCallback = (error, data) => {
    if (error) {
        console.log("Gagal membaca file");
        return;
    }
    console.log(data);
};

fs.readFile('todo.txt', 'UTF-8', fileReafCallback);

// synchronous
console.log("\n");

const data = fs.readFileSync('todo.txt', 'UTF-8');

console.log(data);