const linkTopBar = document.querySelector('.top-bar');
linkTopBar.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});