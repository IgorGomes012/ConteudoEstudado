const _velocidade = Symbol('velocidade'); // retorna sempre o valor diferente
class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0 ) return;
        this[velocidade] = valor;
    }

    get velocidade(){
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}