// Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau 
// properties dari sebuah object ke dalam satuan yang lebih kecil.

const user = {
    username : "zharsuke",
    email : "alazharisqi@protonmail.com",
    isAdmin : true
};
const {username, email, isAdmin} = user;
console.log(username, email, isAdmin);

const animal = {
    name : "cat",
    health : 100,
    attack : 5,
};
const {name : animal_name, health : animal_health, attack : animal_attack} = animal;
console.log(animal_name, animal_health, animal_attack);

// kalau object pakai {}, kalau array pakai [] selain itu seharusnya sama saja.