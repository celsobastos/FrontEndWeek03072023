// alert('ola mundo');
/* comentario de varias linhas */

let nome;
nome = 'Celso';
//console.log(typeof nome);

let nomeFuncionario = 'Paulo';
const COLOR = '#0000ff';

nomeFuncionario = 'Matheus';
//console.log(nomeFuncionario);

let idade = 58;
let sobrenome = 'Santos';
let assinouContrato = false;
let endereco;
let pessoa = {};

let tipoPrimitivo = typeof pessoa;

// alert('test 123');
// confirm('test 123')
// prompt('Digite um numero');

// Operadores aritmeticos
// + - / *


// >, <, !=, !==, ==, ===, >=, <=

// let salario = prompt('Digite seu salario');

/*
 *  && operador E
 *  || operador OU
 *  !  operador not
 */
// let premiacao = 0;
// if (salario <= 1000 && salario > 2000) {
//     premiacao = Number(salario) + 1000;
// } 
// else {
//     premiacao = salario;
// }
// let funcionario = 'Maria';
// let resultado  = `${funcionario}: Seu novo salário é: ${premiacao}`;
// console.log(resultado);

// let medida = '50px';
// let resultado = parseInt(medida) + 20;
// console.log(resultado);

// se 'gerente' = 20% = 0.2
// senao 10% = 0.1

// let n = 10;
// let b = 20;
// b = n + b;
// b += n;

// const nomes = ['Cintia', 'Pedro'];
// const list = ['celso', 'Paula', 'José', 'Maria', 'Pablo'];

// list.forEach((pessoas) => {
//     console.log(pessoas);
// });

// for (let j = 0; j < list.length; j++ ) {
// debugger;
//     let pessoas = list[j];
//     console.log(pessoas);
// }

function reajusteSalarial() {
    for (let i = 0; i < 3; i++) {
        let cargo = prompt('Digite seu Cargo');
        // let confirmacao;
        if (cargo == '') {
            // confirmacao = confirm('O cargo é obrigatório, deseja continuar');
            alert('Ops! cargo obrigatório');
            continue;
        }
        let salario = Number(prompt('Digite seu salário'));
    
        if (cargo == 'gerente') {
            salario += salario * 0.2;
        }
        else if (cargo == 'diretor') {
            salario += salario * 0.3;
        }
        else if (cargo == 'estagiario') {
            salario += salario * 0.02;
        }
        else {
            salario += salario * 0.1;
        }
        let mensagem = `${cargo}, seu novo salário é ${salario}`;
        alert(mensagem);
    }
}

// reajusteSalarial();

let aviso = 'função executada...';

function mensagem(msn) {
    console.log(msn);
}

function soma(valores) {
    let soma = 0;
    valores.forEach(valor => {
        soma += valor;
    });
    return soma;
}
let resultado = soma([10, 20, 30, 100, 300]);
mensagem(`Resultado da soma = ${resultado}`);
mensagem(soma([10,50]));
const contagem = valor => valor + 3;
const contagem1 = function (valor) {
    return valor + 3
};
console.log(contagem(10));

/** Callback function  */
function conta (callback) {
    let itensCompra = [10, 50, 20];
    let total = itensCompra.length;
    callback(total);
}

conta(total => {
    console.log('Compras = ' + total);
});




