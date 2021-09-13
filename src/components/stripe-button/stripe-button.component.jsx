import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_51JZBRnEdb7f4QHNjAp9kM1jnqhJUiVoWanhRwWYVyXYIruyHyGI2Nerv9zUy9Gj9UyhgSHhjS7yhKFraCUFha4KE00A7p2Naaf';

   const onToken = token => {
      console.log(token);
      alert('Payment Successful');
   }

   return (
      <StripeCheckout 
         label='Pay Now'
         name='E_COMMECE srl'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
      />
   )
};

export default StripeCheckoutButton;