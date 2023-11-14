//exercício 22
let salario = Number(prompt('Entre com o salário do funcionário'));
let mes = Number(prompt('Entre com o mês de cálculo do salário'));
let totalSalario = 0;

const calculaSalario = function(salario, mes){
  if (mes>=1 && mes <=5){
    totalSalario = salario + (salario * 0.30);
  }else if(mes>=6 && mes <=11){
    totalSalario = salario + (salario * 0.40);
  }else if(mes === 12){
    totalSalario = salario + (salario * 0.60);
  }else{
    console.log(`Mês não existe`);
    return;
  }
  console.log(`Valor do salário a ser pago R$ ${totalSalario}`)
}

calculaSalario(salario, mes);