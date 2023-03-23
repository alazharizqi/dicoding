// Object

// Kali ini kita akan berkenalan dengan tipe data object. 
// Sebuah tipe data yang sangat berguna dalam pengembangan aplikasi dengan JavaScript. 
// Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks.

// Object berisi pasangan key dan value yang juga dikenal dengan property. 
// Key berperan mirip seperti nama variabel yang menyimpan sebuah nilai. 
// Sementara, value berisi nilai dengan tipe data apa pun termasuk objek lain.

const user = {username : "zharsuke", password : "apaya", age : 19, isAdmin : true};

console.log(user);
console.log(`hi my username is ${user.username}`);

user["age"] = 20;
console.log(user);
delete user.isAdmin;
console.log(user);