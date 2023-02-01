(() => {

  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  //si quiero poner una variable y no le asigno valor si le tengo que especificar el tipo de dato que va a guardar.
  let productInStock: number;
  console.log('productInStock', productInStock);
  if(productInStock > 10){
    console.log('is greater');
  }

  let discount = parseInt('123');
  console.log('discount', discount);

  let hex = 0xfff;
  console.log('hex', hex);

  let bin = 0b1010;
  console.log('bin', bin);



})();
