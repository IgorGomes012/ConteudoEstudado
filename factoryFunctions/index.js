function criaPessoa(nome, sobrenome, a, p){

    return{
        nome,
        sobrenome,

        fala: function(assunto){
            return `${this.nome} esta falando ${assunto}`
        },

        altura: a,
        peso: p,

        // o get transforma a função imc parra uma objeto
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }

};


const p1 = criaPessoa('Maria', 'Silva', 1.8, 80);
console.log(p1.fala('falando sobre JS'));

//imc acessado como objeto por conta do get
console.log(p1.imc);