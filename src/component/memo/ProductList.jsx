import React, { useState } from 'react';
import Product from './Product';

import './ProductList.css';
import UpdateProductPrice from './PriceForm';
const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', details: { info: 'Details of Product 1', price: 100 } },
    { id: 2, name: 'Product 2', details: { info: 'Details of Product 2', price: 200 } },
    // Ajoutez plus de produits ici
  ]);

  const updateProductPrice = (id, newPrice) => {
    setProducts(prevProducts => {
      return prevProducts.map(product => 
        product.id === id 
          ? { ...product, details: { ...product.details, price: newPrice } }
          : product
      );
    });
  };

  return (
    <div className="container">
      <div className="products">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <UpdateProductPrice products={products} updateProductPrice={updateProductPrice} />
    </div>
  );
};

export default ProductList;
