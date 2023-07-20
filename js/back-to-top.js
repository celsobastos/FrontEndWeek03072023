const linkTopBar = document.querySelector('.top-bar');
linkTopBar.addEventListener('click', function(event) {
    window.scrollTo({top: 0, behavior: 'smooth'});
    event.preventDefault();
});