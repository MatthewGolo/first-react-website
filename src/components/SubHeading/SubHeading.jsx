import React from 'react';

import {images} from '../../constants';
const SubHeading = ({tittle}) => (
  <div style={{marginBottom: '15rem'}}>
    <p className="p__cormorant_upright" style={{color:'white',margin: '0 4rem'}}>{tittle}</p>
    <img src={images.spoon} alt="spoon" className='spoon__img' style={{margin: '0 4rem'}}/>
  </div>
);

export default SubHeading;
