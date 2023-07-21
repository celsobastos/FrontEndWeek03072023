const display = document.querySelector('.nav-bar');
const displayBtn = document.querySelector('.icon-bars');
displayBtn.addEventListener('click', function (event) {
    display.classList.toggle('active-mobile');
});



