// export default const CartActionTypes = {
//    TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN'
// }

import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
   type: CartActionTypes.TOGGLE_CART_HIDDEN,
});