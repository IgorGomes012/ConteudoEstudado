let numero = Number(prompt('digite um numero'))
// numero = Number(numero); //converter em numer a string ou da forma acima
const numerotitulo = document.getElementById('numero-Titulo'); // seleciona o id do html
const texto = document.getElementById('texto'); // seleciona o id do html

numerotitulo.innerHTML = numero; // numerotitulo recebo o valor do prompt e muda  o html
texto.innerHTML = `<p> seu numero + 2 é igual a </p> ${numero + 2}`;
