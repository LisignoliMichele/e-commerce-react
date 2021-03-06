import React from 'react';
import { connect } from 'react-redux'

import CollectionItem from '../../collection-item/collection-item.component'

import { selectCollection } from '../../../redux/shop/shop.selector';

import './collection.stylesheet.scss'

const CollectionPage = ({ collection }) => {
   const { title, items} = collection;
   return(
      <div className='collection-page'>
         <h2 className="title">{title}</h2>
         <div className="items">
         {
            items.map(item => <CollectionItem item={item} key={item.id}/>)
         }
         </div>
      </div>
   );
};

const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);