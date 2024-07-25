import React from 'react';
import './ProductList.css';

const UpdateProductPrice = ({ products, updateProductPrice }) => {
  return (
    <div className="card">
      <h3>Update Product Price</h3>
      {products.map(product => (
        <div key={product.id} className="update-item">
          <span>{product.name}</span>
          <input 
            type="number" 
            value={product.details.price} 
            onChange={(e) => updateProductPrice(product.id, parseInt(e.target.value))}
          />
        </div>
      ))}
    </div>
  );
};

export default UpdateProductPrice;
