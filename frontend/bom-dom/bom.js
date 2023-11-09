// bom method alert
let message = 'Halo, user!';
alert(message);

// bom method prompt
let pesanInput = prompt('Silakan masukkan angka...');
console.log(typeof pesanInput); // output -> 'string'

let pesanInput1 = Number(prompt('Masukkan angka sesukamu...'));
let name = prompt('masukkan nama: ', 'azhar');

// bom method console
// Method	Penjelasan

// log()
// Menampilkan pesan secara umum ke console browser.

// info()
// Menampilkan pesan yang berisi informasi penting ke console browser.

// warn()
// Menampilkan pesan yang berisi informasi dalam bentuk peringatan ke console browser.

// error()
// Menampilkan pesan yang berisi informasi dalam bentuk error ke console browser.


// memanggil anggota bom
function alert(nama) {
    console.log('Hati-hati, ' + nama);
  }
   
  alert('Chewbacca'); // Output: Hati-hati, Chewbacca
  // Output di atas akan tercetak ke console browser
   
  window.alert('Chewbacca'); // Output: Hati-hati, Chewbacca
  // Output di atas akan tetap tercetak pada console browser