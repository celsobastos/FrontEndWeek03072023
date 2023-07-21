const contact = document.querySelector('.contact');
const modal = document.querySelector('.contatos-now');

contact.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'block';
});

const opacidade = document.querySelector('.opacidade');
opacidade.addEventListener('click', function() {
    modal.style.display = 'none';
});