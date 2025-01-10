import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (selectedCategory, { rejectWithValue }) => {
    try {
      const url =
        selectedCategory === 'all'
          ? 'https://api.escuelajs.co/api/v1/products'
          : `https://api.escuelajs.co/api/v1/categories/${selectedCategory}/products`;

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue('Erreur lors de la récupération des produits. Veuillez réessayer plus tard.');
    }
  }
);

const initialProductState = { products: [], loading: false, error: null, categories: [], selectedCategory: 'all' };

const productSlice = createSlice({
  name: 'products',
  initialState: initialProductState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedCategory, setCategories } = productSlice.actions;
export default productSlice.reducer;
