import React from 'react';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import './directory.stylesheet.scss';
import MenuItem from '../menu-items/menu-items.component';


const Directory = ({ sections }) => (
    <div className='directory-menu'>
      {sections.map(({title, imageUrl, id, size, linkUrl}) => (
         <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} linkUrl={linkUrl}/>
      ))}
   </div>
);

const mapStateToProps = createStructuredSelector({
   sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);