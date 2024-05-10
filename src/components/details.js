import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./details.css"

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(productData => {
        setProduct(productData);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-card" id='product'>
      <div className="product-image" >
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div >
        <div id='p-title'>{product.title}</div>
        <div id='p-des'>{product.description}</div>
        <div id='p-price'>{product.price} $</div>
        <button className="btn btn-outline-primary">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDetails;
