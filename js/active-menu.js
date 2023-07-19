function activeLinks(linksClass, active) {
    const menu = document.querySelectorAll('.' + linksClass);
    function removeActive() {
        menu.forEach(function(link){
            const classLink = link.classList;
            classLink.remove(active);
        });
    }
    menu.forEach(function(link){
        link.addEventListener('click', function(event){
            removeActive();
            event.target.classList.add(active);
        });
    });
}
