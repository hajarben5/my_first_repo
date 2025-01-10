import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import NavBar from './Compenents/navbar';
import Products from './Compenents/Product'; 
import CartList from './Compenents/CartList'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
      </div>
    </BrowserRouter>
);

export default App;