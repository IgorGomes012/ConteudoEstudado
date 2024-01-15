class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' ja ligado')
            return
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' ja desligado')
            return
        }
    }
}

const d1 = new DispositivoEletronico('iphone');
d1.ligar();
console.log(d1)

class Smartphone extends DispositivoEletronico{}
const s1 = new Smartphone('iphone');
s1.ligar();


console.log('aqui',d1)