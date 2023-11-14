//Função de declaração - Reconhecida em todo o programa
function soma(a,b){
  
    let resultado = a + b;
    console.log(resultado);
    return resultado;
  }
  
  let resultSoma = soma(3,3);
  console.log(resultresultSoma);


  //Retornando os argumentos de uma função
  function func(){
    console.log(arguments);
  }
  
  func(1,2,3,4,5,6);
