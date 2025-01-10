import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/CartSlice';
import productSlice from './features/ProductSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});

export default store;
