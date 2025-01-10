import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { cart: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    increment: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decrement: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
