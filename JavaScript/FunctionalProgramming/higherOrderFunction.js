// high order function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah
// fungsi; atau bahkan keduanya.kita bisa menyimpan function dalam variable.

// teknik high order function digunakan untuk :
// - mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asyncchronous menggunakan callback,
// promise dan lainnya.
// - membuat utilities yang dapat digunakan di berbagai tipe data.
// - membuat teknik currying atau function composition.

const hello = () => {
    console.log('Hello');
};

const say = (someFunction) => {
    someFunction();
};

const sayHello = () => {
    return () => {
        console.log('hello');
    }
}

hello();
say(hello);
sayHello()();
console.log('\n')
// custom map function

const names = ["Azhar", "Zharsuke", "Zharmaru"];

const arrayMap = (arr, action) => {
    const loopThrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];
        if(!item) return newArray;
        return loopThrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }
    return loopThrough(arr, action);
}

const newNames = arrayMap(names, (name) => `${name}`);

console.log({names, newNames});