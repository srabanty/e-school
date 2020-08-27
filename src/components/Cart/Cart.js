import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart = props.cart;
    let total =0;
    for(let i=0;i<cart.length;i++){
        const course = cart[i];
        total = total + Number(course.fee);
    }

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4 class="text-success"><FontAwesomeIcon icon={faShoppingCart} /> Your Cart :</h4>
            <br/>
            <h5>Courses Ordered:&nbsp; {cart.length}</h5>
            <h5>Total Price: &nbsp;$ {formatNumber(total)}</h5>
        </div>
    );
};

export default Cart;