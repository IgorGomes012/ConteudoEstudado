function criaPessoa(nome,sobrenome,idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade 

        //ou

        //nome,
        //sobrenome,
        //idade

        //posso chamar uma função dentro do objeto sem a palavra function
        //fala(){
        //    console.log('ola mundo')
        //}
    }
    //    incrementaidade(){
    //    this.idade++;
    //}

}
//estouchamando a função que esta dentro do objeto isso seria o this

//pessoal.fala();

const pessoa = criaPessoa('igor', 'gomes', 34)
console.log(pessoa.nome)