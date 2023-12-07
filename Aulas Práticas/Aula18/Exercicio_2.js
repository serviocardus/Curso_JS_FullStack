const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
   ]
   
   console.log(products);
   
   console.log(products.map((product) => product)) ;
   
   const valoresProduct = products.map(product => product.price);
   
   console.log(valoresProduct) ;
   console.log(products.map(product => product.price)) ;