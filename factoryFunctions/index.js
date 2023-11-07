function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        fala: function(assunto){
            return `${this.nome} esta falando ${assunto}`
        }    
    }
};


const p1 = criaPessoa('Maria', 'Silva');
console.log(p1.fala('falando sobre JS'));