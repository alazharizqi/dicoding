// function declaration
function sayHello(greet) {
    console.log(`${greet}`);
}
sayHello("kuont");

// function expression
const sayName = function (name) {
    console.log(`hi ${name}`);
}
sayName("kuontci");

// arrow function expression
const kuont = (name) => {
    console.log(`${name}`);
}

kuont("cok lat");

// kalo di arrow function cuma ada 1 parameter gapapa ga pake tanda kurung
const kucing = name => {
    console.log(`${name}`);
}
kucing("babi");

// kalo gaada parameter cukup tanda kurung kosong
const enough = () => {
    console.log("cacing");
}
enough();

// arrow function in one line
const oneLine = name => console.log(`${name}`);
oneLine("ajar");

// kalo pake arrow function gaperlu kasih keyword return
const returN = num => num * 5;
console.log(returN(4));