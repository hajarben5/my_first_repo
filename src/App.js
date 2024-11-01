import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import store from './store';
import NavBar from './shoppingCard/navbar';
import Products from './shoppingCard/Product'; 
import CartList from './shoppingCard/CartList'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;