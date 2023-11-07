//desestruturacao

let a = 'A';
let b = 'B';
let c = 'C'; 

const numeros = [1, 2, 3];
[a, b, c] = numeros;

console.log(a, b, c)

// exemplo 2

//pega um numero1, numero2 e todo o resto da operação ...
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [numero1, numero2, ...resto] = numero;   
console.log(numero1, numero2)

// exemplo 3

const numeross = [[1,2,3][4,5,6][7,8,9]]
const [lista1, lista2, lista3] = numeross

console.log(lista[1][2])
