//comando break

let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: false},
    {id: 4, nome: "Marlon", habilitado: true},
    {id: 5, nome: "Ana", habilitado: false}
];

let contador = 0;
let encontrouHabilitado = false;

while ( contador < funcionarios.length ) {

    let funcionario = funcionarios[contador];

    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

    contador++;
}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}


//continue

let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

let contador2 = 0;

while ( contador2 < alunos.length ) {

    let aluno = alunos[contador2];

    contador2++;

    if ( aluno.media < 6 ) {
        continue;
    }

    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");

}

//Caso seja necessário iterar todos os elementos da coleção, use o comando continue. Agora se o objetivo for encontrar apenas um único elemento que atenda a uma determinada condição, o comando break é a melhor opção.