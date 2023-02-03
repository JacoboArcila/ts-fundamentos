import {addProduct, calcStock, products} from './product.service';

addProduct({
  title: 'Producto1',
  createdAt: new Date(1993,1,1),
  stock: 12,
})

addProduct({
  title: 'Producto2',
  createdAt: new Date(1925,1,1),
  stock: 10,
  size:"XL"
})

console.log(products);
const total = calcStock();
console.log(total);

