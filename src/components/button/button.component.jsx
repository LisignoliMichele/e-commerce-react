import React from 'react';

import './button.stylesheet.scss'

const Button = ({ children, isGoogleSignIn, ...otherProps}) => (
   <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
     {children}
   </button>
);

export default Button