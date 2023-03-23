// WeakMap & WeakSet
// weakmap merupakan varian dari map yang mendukung garbage collection.
// garbage collection adalah proses dimana interpreter js mengambil kembali memori yang tidak lagi
// dapat dijangkau dan tidak dapat digunakan oleh program.
// garbage collection di javascript dilakukan secara otomatis dan bukan menjadi urusan dari developer.
// yang dimaksud weak dalam weakMap adalah refrensi terhadap nilai yang disimpan.
// apabila suatu nilai yang disimpan weakMap sudah tidak terjangkau atau tidak bisa diakses, maka refrensi ke memorinya akan dihapus.
// beberapa hal yang membedakan antara map dan weakmap:
// - key dari weakmap harus berupa object atau Array. nilai primitif tidak bisa digunakan sebagai key karena tidak mendukung garbage collection.
// - weakmap memiliki method get, set, has, delete. namun weakmap tidak termasuk kategori iterable sehingga tidak memiliki method keys, values, foreach.
// - weakmap juga tidak memiliki property size. ini karena ukuran weakmap dapat diubah karena proses garbage collection.
// 

const visitCountMap = new Map();

function countUser(user) {
    let count = visitCountMap.get(user) || 0;
    visitCountMap.set(user, count *1);
}

let azhar = {name : "Azhar"};
countUser(azhar);

azhar = null;

setTimeout(function() {
    console.log(visitCountMap);
}, 10000)

const {inspect} = require('util');

const visitCountWeakMap = new WeakMap();

function countUserWeakmap(user) {
    let count = visitCountWeakMap.get(user) || 0;
    visitCountWeakMap.set(user, count * 1);
}

let zharsuke = {name : "zharsuke"};
countUserWeakmap(zharsuke);
zharsuke = null;

setTimeout(function() {
    console.log(inspect(visitCountWeakMap, { showHidden : true}));
}, 10000);