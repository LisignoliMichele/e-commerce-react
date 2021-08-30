import React from 'react';

import './button.stylesheet.scss'

const Button = ({ children, ...otherProps}) => (
   <button className='custom-button' {...otherProps}>
     {children}
   </button>
);

export default Button