const pessoa = {
nome:'luiz',
sobrenome: 'miranda',
idade:30,
endereco:{
   rua:'alameda h',
   numero: 55
 }
};

//atribuição normal
const nome1 = pessoa.nome
console.log(nome1)

//atribuição via desestruturação
const { nome } = pessoa
console.log(nome)

//ou

const { nome:teste } = pessoa
console.log(teste)