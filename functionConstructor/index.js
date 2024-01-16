function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log("Metodo");
    }
}

const p1 = new Pessoa('luiz', 'gomes');
const p2 = new Pessoa('igor', 'gomes');
p2.metodo();

console.log(p1.nome)