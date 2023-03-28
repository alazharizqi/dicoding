// Paradigma Functional Programming adalah paradigma pemrograman dimana proses komputasi didasarkan pada fungsi
// matematika murni. Functional Programming ditulis dengan gaya deklaratif yang berfokus pada what to sole dibanding
// how to solve yang dianut oleh gaya imperatif.

// imperatif code
const names = ["Azhar", "Zharsuke", "Zharmaru"];

const newNameWithExcMark = [];

for (let i = 0; i < names.length; i++) {
    newNameWithExcMark.push(`${names[i]}!`);
}

console.log(newNameWithExcMark);

// deklaratif code

const users = ["Azhar", "Zharsuke", "Zharmaru"];

const newUsersWithExcMark = users.map((user) => `${user}!`);

console.log(newUsersWithExcMark)