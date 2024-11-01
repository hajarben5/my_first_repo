import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { removeFromCart, increment, decrement } from '../store'; // Adjust the import path if needed

const CartList = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(increment(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  return (
    <div>
      <h4 className="mb-4 text-center m-2">Mon Panier</h4>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>Prix Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={`${item.id}-${index}`}>
                <td>{item.title}...</td> 
                <td>{item.price} €</td>
                <td>{item.quantity}</td>
                <td>{(item.price * item.quantity).toFixed(2)} €</td> 
                <td>
                  <button className='btn btn-success mx-2' onClick={() => handleIncrement(item.id)}>{<FaPlus />}</button>
                  <button className='btn btn-warning' onClick={() => handleDecrement(item.id)}>{<FaMinus />}</button>
                  <button className='btn btn-danger' onClick={() => handleRemoveFromCart(item.id)}>{<AiFillDelete />}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: '#f8f9fa', 
          border: '1px solid #dee2e6', 
          borderRadius: '5px', 
          textAlign: 'right' 
        }}>
        <h5 style={{ margin: 0 }}>Total des prix: <strong>{totalPrice} €</strong></h5>
      </div>
    </div>
  );
};

export default CartList;
