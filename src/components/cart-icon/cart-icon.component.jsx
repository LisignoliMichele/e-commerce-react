import Ract from 'react';

import { RactComponent as ShoppingIcon } from '../..assets/11.2 shopping-bag.svg';

const CartIcon = () => (
   <div className='cart-icon'>
      <SoppingIcon className="shopping-icon"/>
      <span className="item-count">0</span>
   </div>
);

export default CartIcon;