(() => {

  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  /* login('jacobo@gmail.com', '1212'); */
  login({
    email: 'jacobo@gmail.com',
    password: 1212
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];


  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Producto1',
    createdAt: new Date(1993,1,1),
    stock: 12,
    size:"L"
  })
  addProduct({
    title: 'Producto2',
    createdAt: new Date(1925,1,1),
    stock: 10,
    size:"XL"
  })
  console.log(products);

})()
