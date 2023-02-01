
/* esos parentesis lo hacemos para que el scope de las
variables no choquen con otros archivos.
Entonces se crea una funcion anonima que se autoejecuta
para darle un scope a las variables. */
(() => {
  let myProductName = 'Producto 1';
  let myProductPrice = 123;

  myProductName = 'change';
  myProductName.toUpperCase();

  myProductPrice.toFixed();

  const myProdcutStock = 1000;

  const myProductName2 = 'Producto 1';
})();

