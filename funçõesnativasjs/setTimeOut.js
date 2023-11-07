function mostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

// function funcaoDoInterval(){
//     console.log(mostrarHora())
// }

// setInterval(funcaoDoInterval, 1000);

//ou

const timer = setInterval(function(){
    console.log(mostrarHora())
}, 1000)

setTimeout(function(){
    clearInterval(timer);
}, 3000)

setTimeout(function(){
    console.log('ola mundo');
}, 5000)