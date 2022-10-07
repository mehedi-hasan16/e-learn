import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart= props.cart;
    const total = cart.reduce((sum, element)=>sum+element.price,0);

    return (
        <div className='cart'>
            <h3>Course Added: {cart.length}</h3>
            <h3>Total Price: ${total}</h3>
            <button className='btn btn-primary'>PAY NOW</button>
        </div>
    );
};

export default Cart;