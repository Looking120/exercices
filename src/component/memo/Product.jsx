import React from 'react';
import './ProductList.css';

const Product = React.memo(({ product }) => {
  console.log(`Rendering ${product.name}`);
  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>{product.details.info}</p>
      <p>Price: ${product.details.price}</p>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.product.id === nextProps.product.id &&
         prevProps.product.name === nextProps.product.name &&
         prevProps.product.details.info === nextProps.product.details.info &&
         prevProps.product.details.price === nextProps.product.details.price;
});

export default Product;
