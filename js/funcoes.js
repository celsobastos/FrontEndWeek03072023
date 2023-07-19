function soma(callback) {
    console.log('executou a função soma');
    callback();
    return 'test';
}

// soma(() => {
//     console.log('executou a função 2');
// });

const pessoa = {
    nome: 'Gabriel Beires',
    idade: 20,
    itens: ['sapato', 'camisa', 'chapeu'],
    pegarNome: function () {
        return this.nome;
    },
    historico: {
        dados: {
            'data': '10/02/2023',
            'list': ['caneta', 'borracha'],
        }
    }
};

// let ob = document.querySelector('.h1').focus();
// ob.pegarNome();
// pessoa.endereco = 'rua a a asdfas';
// pessoa.itens[1]
// pessoa.historico.dados.list[0]
// window.meunome = 'celso';

function showData(callback) {
    console.log('test 1');
    setTimeout(function(){
        console.log('test 2');
        callback();
    }, 2000);
    console.log('test 3');
}

showData(() => {
    console.log('minha função callback')
});