// Spread Operator

// Masih terkait dengan array, ES6 memiliki fitur menarik untuk membantu pengelolaan array menjadi lebih mudah, 
// yaitu spread operator.

// Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object 
// menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...).

let myArray = ["azhar", "zharsuke", "zharmaru"];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
console.log(myArray.length);
console.log(myArray);
myArray.push("zharkuntol");
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.unshift("sasuke");
console.log(myArray);

delete myArray[0];
console.log(myArray.length);

myArray.splice(1, 1);
console.log(myArray);