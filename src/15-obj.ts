(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
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
