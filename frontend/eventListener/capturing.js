const divs = document.getElementsByTagName('div');

for (let el of divs) {
    el.addEventListener('click', function() {
        alert('elemen ' + el.getAttribute('id').toUpperCase());
    }, true);
}