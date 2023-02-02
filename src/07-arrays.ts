(() => {
  let prices = [1,2,1,2,2,121, "hola", true];
  prices.push(2);


  let products = ["hola", true];
  products.push(false, true);

  let mixed: (number | string | boolean | Object)[] = ["hola", true];
  mixed.push(1);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,1,2,2,121];
  numbers.map(item => item * 2);

})()
