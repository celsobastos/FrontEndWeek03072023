function ajax() {
    let http = new XMLHttpRequest();
    let url = 'http://viacep.com.br/ws/04849270/json/';

    http.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            let dados = JSON.parse(this.responseText);
            let cep = document.querySelector('.cep');
            cep.value = dados.cep;

            console.log(dados);
        }
    }
    http.open("GET", url, true);
    http.send();
}

let botao = document.querySelector('.form-ajax');
botao.addEventListener('click', (event) => {
    event.preventDefault();
    ajax();
});


// let http = new XMLHttpRequest();
// let url = 'http://localhost:3002/servidor';

// http.onreadystatechange = function() {
//     if(this.readyState === 4 && this.status === 200) {
//         let dados = this.responseText;
//         console.log(dados);
//     }
// }
// http.open("GET", url, true);
// http.send();


