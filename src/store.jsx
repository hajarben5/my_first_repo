import { createStore, combineReducers } from 'redux';

// Initial states
const initialCartState = { cart: [] };
const initialProductState = { products: [], loading: false, error: null };

// Cart Reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
    case 'INCREMENT':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case 'DECREMENT':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

// Product Reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case 'FILTER_PRODUCT_REQUEST':
      return { ...state, loading: true };
    case 'FILTER_PRODUCT_SUCCESS':
      return { ...state, loading: false, products: action.payload };
    case 'FILTER_PRODUCT_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'EDIT_PRODUCT':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? { ...product, ...action.payload.data } : product
        ),
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// Root Reducer
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

// Store
const store = createStore(rootReducer);

export default store;

// Action creators
export const filterProductRequest = () => ({ type: 'FILTER_PRODUCT_REQUEST' });
export const filterProductSuccess = (products) => ({ type: 'FILTER_PRODUCT_SUCCESS', payload: products });
export const filterProductError = (error) => ({ type: 'FILTER_PRODUCT_ERROR', payload: error });
export const addProduct = (product) => ({ type: 'ADD_PRODUCT', payload: product });
export const editProduct = (id, data) => ({ type: 'EDIT_PRODUCT', payload: { id, data } });
export const deleteProduct = (id) => ({ type: 'DELETE_PRODUCT', payload: { id } });

export const addToCart = (item) => ({ type: 'ADD_TO_CART', payload: item });
export const removeFromCart = (id) => ({ type: 'REMOVE_FROM_CART', payload: { id } });
export const increment = (id) => ({ type: 'INCREMENT', payload: { id } });
export const decrement = (id) => ({ type: 'DECREMENT', payload: { id } });
