(() => {

  let productTitle = "My Amazing product";
  productTitle = "My Amazing product changed";
  console.log('productTitle', productTitle);

  const productDescription = "I'm bla bla bla bla bla bla s asss";
  console.log('productDescription', productDescription);

  let productPrice = 200;
  let isNew = false;

  const summary = `
    ttile: ${productTitle}
    description: ${productDescription}
    price:.${productPrice}
    isNew: ${isNew}
  `;
  console.log(summary);


})();
