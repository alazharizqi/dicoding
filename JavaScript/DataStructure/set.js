// Set
// set sederhananya merupakan kumpulan nilai (set of values). set tidak berurutan dan 
// juga tidak diindeks. data didalam set unik dan tidak ada duplikasi.

const numberSet = new Set([1,4,6,4,1]);
// fungsi add() hanya menerima satu argumen
numberSet.add(5)
// funsi delete() menghapus nilainya, bukan indeksnya
numberSet.delete(1);
console.log(numberSet);