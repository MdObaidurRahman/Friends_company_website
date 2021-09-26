import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Information.css';

const Information = (props) => {
    const { img, name, Expert, Experience, salary, address } = props.information;
    // const element=<FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='info'>
            <img src={img} alt="" />
            <h3><span>Name: </span>{name}</h3>
            <p><span>Expert In: </span>{Expert}</p>
            <p><span>Experience: </span>{Experience}</p>
            <p><span>Salary: </span>{salary}</p>
            <p><span>Address: </span>{address}</p>
            <button onClick={() => props.handleAddToCart(props.information)} className="btn-regular" > <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to Cart</button>
        </div>
    );
};

export default Information;