// este codigo esta percorrendo a coleçao até contador ser mais que 4 que é a quantidade de dados que essa coleção possui

/*let paises = ["Brasil", "Suíça", "França", "Japão"];

let contador = 0;

while ( contador < paises.length ) {

    console.log(paises[contador]);
    contador++;

}
*/

// conta quantos numeros pares e quantos numeros  impares tem

let numeros = [10, 5, 7, 8, 9, 6, 12, 4];

let total_impares = 0;
let total_pares = 0;

let contador = 0;

while ( contador < numeros.length ) {

    if( numeros[contador] % 2 == 0 ){
        total_pares++;
    } else {
        total_impares++;
    }

    contador++;

}

console.log(" O total de números ímpares é: " + total_impares);
console.log(" O total de números pares é: " + total_pares);
