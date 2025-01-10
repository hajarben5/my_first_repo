import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setSelectedCategory, setCategories } from '../features/ProductSlice';
import { addToCart } from '../features/CartSlice';
import Swal from 'sweetalert2'; 
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img className="card-img-top" src={product.images[0]} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description.slice(0, 85)}...</p>
        <p>Prix: {product.price} €</p>
        <button className="btn btn-primary" onClick={() => onAddToCart(product)}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error, categories, selectedCategory, loadingCategories } = useSelector((state) => state.products);

  useEffect(() => {
    // Fetch products when category is selected or changed
    dispatch(fetchProducts(selectedCategory));
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    // Fetch categories on component mount
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
        const filteredCategories = response.data.filter(
          category => category.name.toLowerCase() !== 'shalma' &&
                      category.name.toLowerCase() !== 'add' &&
                      category.name.toLowerCase() !== 'testing categories'
        );
        dispatch(setCategories(filteredCategories));
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, [dispatch]);

  const handleCategoryChange = (e) => {
    dispatch(setSelectedCategory(e.target.value));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));

    Swal.fire({
      title: `${product.title} ajouté au panier!`,
      text: 'Vous pouvez continuer vos achats ou consulter votre panier.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  if (loading || loadingCategories) {
    return (
      <div className="spinner-border text-primary">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container">
      <div className="my-3">
        <label htmlFor="categoryFilter" className="form-label">
          Filtrer par catégorie :
        </label>
        <select
          id="categoryFilter"
          className="form-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">Toutes les catégories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
