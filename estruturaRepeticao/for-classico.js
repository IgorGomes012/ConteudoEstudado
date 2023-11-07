for(let i  = 0; i <= 5; i++){
  console.log(`${i} ate o 5`)
}

for(let i  = 0; i <= 50; i+=10){
  console.log(`${i} ate o 5`)
}

for(let i  = 0; i <= 5; i++){
    const par = i % 2 === 0;
    console.log(i, par)
}

const frutas = ['maça', 'pera', 'uva']

for(let i  = 0; i < frutas.length; i++){
  console.log(`indice ${i}`, frutas[i])
}
