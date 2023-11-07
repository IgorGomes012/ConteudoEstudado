// const trehoras = 60 * 60 * 3 * 1000
// const umdia = 60 * 60 * 24 * 1000

const data = new Date(0);  //01/01/1970    timestamp ou marco zero
console.log(data.toString())

const data2 = new Date(2019, 3, 20, 15, 27); //ano, mes, dia, horas, minutos

const data3 = new Date('2019-3-20 15:27:22'); //ano, mes, dia, horas, minutos, milesimos
console.log('dia', data.getDate()) //dia
console.log('mes', data.getMonth())// mes
console.log('ano', data.getFullYear())// ano 
onsole.log('hora', data.getHours()) //hora
onsole.log('minutos', data.getMinutes()) //minutos 
console.log('segundos', data.getSeconds()) //segundos
onsole.log('milesimos', data.getMilliseconds())// milessimos
console.log('dia semana', data.getDay()) //dia da semana

console.log(Date.now)// da a data atual em milesimos de segundo

//coloca um zero a esquerda de todo numero menor que 10
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}
//chama a função zeroesquerda e adiciona na data atua
function formataData(data) {
       const dia = zeroAEsquerda (data.getDate())
       const mes = zeroAEsquerda (data.getMonth())
       const ano = zeroAEsquerda (data.getFullYear())
       const hora = zeroAEsquerda (data.getHours())
       const min = zeroAEsquerda (data.getMinutes())
       const seg = zeroAEsquerda (data.getSeconds())
}