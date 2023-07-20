const Usuario = function(){
    this.nome = '';
    this.pegarNome = function() {
        return this.nome;
    };
};
const UsuarioPessoalFisica = function(){
    this.desconto = 0.1;
};
Usuario.prototype = UsuarioPessoalFisica;

let upf = new UsuarioPessoalFisica();
upf.nome = 'Celso';
console.dir(upf);
let pessoas = ['Pamela', 'Jonas'];
pessoas.prototype = Array;
console.dir(pessoas);
let ob = {
    nome: 'celso',
};
ob.prototype = Usuario;
console.dir(ob);
// Array.prototype = pessoas;


let dados = {
    nome: 'Celso',
    endereco: 'Rua das alamedas',
    numero: '25',
};

let paraJson = JSON.stringify(dados);
let paraObjeto = JSON.parse(paraJson);

console.log(paraJson);
console.log(paraObjeto);
