//exercicio 1

let numero = 3;
let contador1 = 0;

console.log("Tabuada de multiplicação - Nº " + numero);

while ( contador1 <= 10 ) {

    let resultado = numero * contador1;

    console.log( numero + " x " + contador1 + " = " + resultado );

    contador1++;

}

//exercicio 2

let capital_emprestado = 3000;
let taxa_juros = 0.02; // 2%

let contador2 = 1;
let parcelas_totais = 5;

while ( contador2 <= parcelas_totais ) {

    let numero_parcela = contador2;

    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcela;

    console.log("A taxa de juros no período de " + numero_parcela + " mes(es) é de R$" + juros_emprestimo + ",00");

    contador2++;

}