import React, { useEffect, useState } from 'react';
import Information from '../Information/Information';
import Cart from '../Cart/Cart';
import './Friends.css';

const Friends = () => {
    const [informations, setInformation] = useState([]);
    const [cart, setCart] = useState([]);
    // fetch data
    useEffect(() => {
        fetch('./Friends.json')
            .then(res => res.json())
            .then(data => setInformation(data))

    }, [])
    // handle add to cart button
    const handleAddToCart = (information) => {
        const newCart = [...cart, information];
        setCart(newCart);
    }
    return (
        <div className="friends">
            <div className="friends-container">
                {

                    informations.map(information => <Information
                        key={information.id}
                        information={information}
                        handleAddToCart={handleAddToCart}
                    >
                    </Information>)

                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Friends;