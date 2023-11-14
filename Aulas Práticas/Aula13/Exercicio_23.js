//exercício 23
function IMC(peso, altura){
    return peso/(altura **2);
  }
  
  
  let peso = Number(prompt('Informe o peso do paciente em kg:'));
  let altura = Number(prompt('Informe a altura do paciente em metros:'));
  
  let imc = IMC(peso, altura);
  let mensagemIMC = `IMC do Paciente: ${imc}`;
  let mensagemInterpretacaoIMC = "";
  
  
    if (imc < 18.50){
      mensagemInterpretacaoIMC = " - Abaixo do peso";
    }else if(imc >= 18.50 && imc < 25.00){
       mensagemInterpretacaoIMC = " - Normal";
     }else if(imc >= 25.00 && imc < 30.00){
       mensagemInterpretacaoIMC = " - Sobrepeso";
     }else if(imc >= 30.00 && imc < 35.00){
       mensagemInterpretacaoIMC = " - Obesidade Grau 1";
     }else if(imc >= 35.00 && imc < 40.00){
       mensagemInterpretacaoIMC = " - Obesidade Grau 2";
    }else{
      mensagemInterpretacaoIMC = " - Obesidade Grau 3";
    }
  
  console.log(mensagemIMC + mensagemInterpretacaoIMC);
  