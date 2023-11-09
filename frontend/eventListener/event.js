function increment() {
    document.getElementById('count').innerText++;

    if (document.getElementById('count').innerText == 7) {
        const hiddenMessage = document.createElement('h4');
        hiddenMessage.innerText = 'Selamat dapat hadiah';
        const image = document.createElement('img');
        image.setAttribute('src', 'https://i.ibb.co/0V49VRZ/catto.jpg');
        const contents = document.querySelector('.contents');
        contents.appendChild(hiddenMessage).appendChild(image);
    }
}

function welcome() {
    alert('Elemen html tampil');
    const contents = document.querySelector('.contents');
    contents.removeAttribute('hidden');
}

// document.getElementById('incrementButton').onclick = increment;
// document.body.onload = welcome;

// window.addEventListener('load', welcome);
// document.getElementById('incrementButton').addEventListener('click', increment);