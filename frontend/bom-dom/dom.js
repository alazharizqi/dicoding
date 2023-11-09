// Method  Contoh  Fungsi
// getElementById()
// document.getElementById('display');
// Mengembalikan satu elemen yang memiliki nilai id "display".

// getElementsByName()
// document.getElementsByName('button')
// Mengembalikan banyak elemen (HTMLCollection) yang memiliki attribute name dengan nilai "button".

// getElementsByClassName()
// document.getElementsByClassName('button')
// Mengembalikan banyak elemen (HTMLCollection) yang memiliki attribute class dengan nilai "button".

// getElementsByTagName()
// document.getElementsByTagName('div')
// Mengembalikan banyak elemen (HTMLCollection) yang merupakan <div> element.

// querySelector()
// document.querySelector('.button')
// Mengembalikan elemen pertama (node) yang menerapkan class "button".

// querySelectorAll()
// document.querySelectorAll('.button')
// Mengembalikan banyak Node dalam bentuk NodeList yang menerapkan class "button".

const buttons = document.querySelectorAll('.button');

for (let item of buttons) {
    console.log(item);
  }

// create new element html
const newElement = document.createElement('p');
newElement.innerText = "hallo";
newElement.innerHTML = '<b>Selamat datang</b> ke HTML kosong ini :)';
newElement // to call

const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://picsum.photos/200/300');

const links = document.getElementById('links');
links.innerHTML; 
links.innerText; 


// manipulasi konten dengan innerText
const dicoding = document.getElementById('dicodingLink'); 
dicoding.innerText = "Belajar programming di dicoding"; 

// manipulasi konten dengan innerHTML
const dicoding = document.getElementById('dicodingLink');
dicoding.innerHTML = "<i>Belajar programming di dicoding</i>";

// manipulasi konten dengan style.property
const buttonItem = document.getElementsByName('button');
for (const button of buttonItem) {
    console.log(button.children[0])
}
for (const button of buttons) {
    button.children[0].style.borderRadius = '6px';
}

// adding html element into dom
// with appendChild
const newElement = document.createElement('li');
newElement.innerText = 'Selamat menikmati!';
const daftar =  document.getElementById('daftar');
daftar.appendChild(newElement);

// with insertBefore
const elementAwal = document.createElement('li');
elementAwal.innerText = "Hidupkan kompor.";
const itemAwal = document.getElementById('awal') 
daftar.insertBefore(newElement, itemAwal); 