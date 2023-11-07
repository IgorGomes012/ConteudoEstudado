//tente executar
try {
    console.log(dsa)
}
//caso de erro no codigo acima execute o catch 
catch (error) {
    console.log('erro')
}

function soma(x,y){
  if(typeof x !== 'number' || typeof y !== 'number'){
    throw new Error ('x e y precisan ser numeros')
  }
  return x+y;
}

try {
    console.log(soma(1,2))
    console.log(soma('1',2))
}catch(error){
    console.log(error)
}

