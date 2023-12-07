//Spread Operador com objeto

let address = {
    postalCode: '74250175',
    city: 'Berlim'
  }
  
  console.log(address);
  
  address = {...address, country: 'Alemanha'};
  
  console.log(address);

  //Spread Operador com objeto

let address2 = {
    postalCode: '74250175',
    city: 'Berlim'
  }
  console.log(address2);
  
  address2 = {
    ...address2,
    city: 'London',
    country: 'England'
  };
  
  console.log(address2);