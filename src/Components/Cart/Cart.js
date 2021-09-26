import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let name = [];

    for (const information of cart) {
        // calculate total salary and show emloyee name
        total = total + information.salary;
        name = name + information.name;

    }
    return (
        <div className='summary'>
            <h3>Friends SUMMARY</h3>
            <h5>ADD Friends: {props.cart.length}</h5>
            <h5>TOTAL COST : $ {total}</h5>
            <h3 className="name"> {name} </h3>
        </div>
    );
};

export default Cart;