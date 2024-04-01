import React from 'react';

import images from '../../constants/images';
import './Header.css';
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => (
  <div  className="app__header app__wrapper" id='home'>
      
      <div  className="app__wrapper_info">
        <SubHeading tittle="Modern Filipino Recipes"/>
        <h1 className='app__header-h1'>Journey into Culinary Perfection</h1>
        <p className='p__cormorant_upright'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button className='custom__button' type='button'>Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>

  </div>
);

export default Header;
