
function valida() {
    const inputs = document.querySelectorAll('.form input');
    let formPreenchido = [];
    inputs.forEach(input => {
        let valor = input.value;

        // let regex = /^[0-9]/;
        // let testando = regex.test(valor);

        if (valor === '' && valor.length < 10) {
            formPreenchido.push('error');
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return formPreenchido;
}

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    let errors = valida();
    if(errors.length === 0) {
        form.submit();
    }
});
