// synchronous adalah proses yang dijalankan berdasarkan sebuah urutan dan saling menunggu.
// kebalikan asynchronous, adalah proses yang dijalankan secara bersamaan.

console.log("Apa apa ja lah");

setTimeout(() => {
    console.log('terima kasih sudah mampir');
}, 3000)

console.log("ada yang bisa dibantu?");