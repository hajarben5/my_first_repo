import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store'; // Adjust the import path as necessary

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert(`${product.title} has been added to your cart!`); 
  };

  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img className="card-img-top" src={product.images[0]} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description.slice(0, 85)}...</p>
        <p>Prix: {product.price} €</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>Ajouter au panier</button>
      </div>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        setProducts(response.data);
      } catch (err) {
        setError('Erreur lors de la récupération des produits. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="spinner-border text-primary"><span className="sr-only">Loading...</span></div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
