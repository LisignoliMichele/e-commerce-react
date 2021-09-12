import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.stylesheet.scss'

const CartDropdown = ({cartItems, history, dispatch}) => (
   <div className='cart-dropdown'>
      <div className='cart-items'>
         {
            cartItems.length ?
            cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
            :
            <span className='empty-message'>You cart is empty</span>
         }
      </div>
      <Button onClick={() => {
         history.push('/checkout');
         dispatch(toggleCartHidden())
         }}>
         GO TO CHECKOUT
      </Button>
   </div>
);


const mapStateToProps = createStructuredSelector ({
   cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));