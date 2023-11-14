function valorFinalProduto(preçoProduto, prazoEntrega){
    let preçofinalProduto = 0;
      switch (prazoEntrega) {
           case 3:
             preçofinalProduto = preçoProduto + 25.00;
             break;
           case 5:
             preçofinalProduto = preçoProduto + 20.00;
             break;
           case 7:
             preçofinalProduto = preçoProduto + 15.00;
             break;
           case 10:
             preçofinalProduto = preçoProduto + 10.00;
             break;
           default:
         }
    return preçofinalProduto;
  }
 
 let precoProduto = Number(prompt("Infome o preço do produto:"));
 
 let prazoEntrega = Number(prompt("o prazo desejado de entrega --> 3,5,7 ou 10 dias :"));
 
 let precoFinalProduto = valorFinalProduto(precoProduto, prazoEntrega);
 
 console.log(`O valor final do produto é de R$ ${precoFinalProduto}`);