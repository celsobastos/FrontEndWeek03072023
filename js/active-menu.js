function activeLinks(linksClass, active) {
    const menu = document.querySelectorAll('.' + linksClass);
    applyActive(menu, false);
    function applyActive(menuBar, isToRemove = true) {
        menuBar.forEach(function(link){
            if (isToRemove) {
                link.classList.remove(active);
            } else {
                link.addEventListener('click', function(event){
                    applyActive(menuBar);
                    event.target.classList.add(active);
                });
            }
        });
    }
}
