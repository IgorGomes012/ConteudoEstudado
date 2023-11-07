let label_aluno = "Aluno";
let valor_aluno = "Edmilson";

let label_grau = "Grau de escolaridade"
let valor_grau = "Ensino Médio Completo";

console.log(label_aluno.padStart(20, " ") + ": " + valor_aluno);

console.log(label_grau.padStart(20, " ") + ": " + valor_grau);

//                Aluno: Edmilson
// Grau de escolaridade: Ensino Médio Completo

//exemplo2

let label = "Email: ";
let email = "contato@email.com";

console.log( label.padEnd(20, ' ') + email );

// Email:              contato@email.com

//exemplo 3

let label_nome = "Nome:";
let valor_nome = "Jorge Luiz";

let label_profissao = "Profissão:";
let valor_profissao = "Professor";

let label_endereco = "Endereço:";
let valor_endereco = "Rua Cruzeiro do Sul";

console.log( label_nome + valor_nome );
console.log( label_profissao + valor_profissao );
console.log( label_endereco + valor_endereco );

// Nome:Jorge Luiz
// Profissão:Professor
// Endereço:Rua Cruzeiro do Sul
