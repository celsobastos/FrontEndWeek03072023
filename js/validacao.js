let usuario = {};
let dataStorage = sessionStorage.getItem('usuario');
if(dataStorage !== null) {
    const inputs = document.querySelectorAll('.form input');
    let userParse = JSON.parse(dataStorage);
    inputs.forEach(input => {
        input.value = userParse[input.name];
    });
}

function valida() {
    const inputs = document.querySelectorAll('.form input');
    let formPreenchido = [];
    inputs.forEach(input => {
        let valor = input.value.trim();

        // switch(input.name) {
        //     case 'nome':
        //         let qtde = valor.length;
        //         if (qtde > 10 || valor === '') {
        //             input.classList.add('error');
        //         }
        //         else {
        //             input.classList.remove('error');
        //         }
        //     break;

        //     case 'email':
        //         let existArroba = valor.indexOf('@');

        //         if (existArroba === -1) {
        //             input.classList.add('error');
        //         }
        //         else {
        //             input.classList.remove('error');
        //         }
        //     break;

        //     case 'date':

        //     break;
        //     default: 
        //         alert('senão do swhitch')
        // }

        // let regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/;
        // let testando = regex.test(valor);

        if (valor === '') {
            formPreenchido.push(input.name);
            input.classList.add('error');
            input.focus();
        } else {
            input.classList.remove('error');
            usuario[input.name] = valor;
        }
    });
    return formPreenchido;
}

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    let errors = valida();
    console.log(errors);
    if(errors.length === 0) {
        sessionStorage.setItem('usuario', JSON.stringify(usuario))
        form.submit();
    }
});
