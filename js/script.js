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

let salario = Number(prompt('Digite seu salário'));
let cargo = prompt('Digite seu Cargo');
salario += salario * 0.1;
if (cargo == 'gerente') {
    salario += salario * 0.2;
}
let mensagem = `Seu novo salário é ${salario}`;
alert(mensagem);