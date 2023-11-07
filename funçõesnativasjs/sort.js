// A função nativa (método) sort é utilizada para alterar a ordenação dos itens de um array.
// Essa função ordena o array com base em uma função de comparação e em seguida retorna o array ordenado.

const frutas = ["Manga", "Laranja","Tangerina","Banana"];

console.log("\nArray antes da ordenação:\n");
console.info(frutas);

frutas.sort();

console.log("\nArray depois da ordenação:\n");
console.info(frutas);
console.log("\n");


//exemplo com numericos

const numeros = [10,1,2];

console.log("\nArray antes da ordenação:\n");
console.info(numeros);

function ordenaNumeros(a, b){
    return a - b;
}

numeros.sort(ordenaNumeros);

console.log("\nArray depois da ordenação:\n");
console.info(numeros);
console.log("\n");


//Ordenando um array de objetos

let tabela = [
    {equipe: 'Time Azul', pontos: 25 },
    {equipe: 'Time Verde', pontos: 47 },
    {equipe: 'Time Amarelo', pontos: 39 },
    {equipe: 'Time Vermelho', pontos: 16 },
];

function ordenaMaisPontos(a, b){
    return b.pontos - a.pontos;
}

tabela.sort(ordenaMaisPontos);

for(let i = 0; i < tabela.length; i++)
{
    let posicao = i+1;
    console.log(posicao+" | "+tabela[i].equipe+" - "+tabela[i].pontos+" pts");
}