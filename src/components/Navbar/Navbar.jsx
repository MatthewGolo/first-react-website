import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'


import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const[toggleMenu,setToggleMenu] = React.useState(false);
  return(

    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.mangjuan} alt="app-logo"/>
      </div>
      <ul className='app__navbar-menu'>
        <li className='p__opensans'><a href="#home"> Home </a></li>
        <li className='p__opensans'><a href="#menu"> Menu </a></li>
        <li className='p__opensans'><a href="#category"> Category </a></li>
        <li className='p__opensans'><a href="#book"> Book </a></li>
        <li className='p__opensans'><a href="#about"> About </a></li>
        <li className='p__opensans'><a href="#contact"> Contact </a></li>
      </ul>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={30} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={30} className='overylay__close' onClick={() => setToggleMenu(false)} />
              <ul className='app__navbar-smallscreen-links'>
                <li className='p__opensans'><a href="#home"> Home </a></li>
                <li className='p__opensans'><a href="#menu"> Menu </a></li>
                <li className='p__opensans'><a href="#category"> Category </a></li>
                <li className='p__opensans'><a href="#book"> Book </a></li>
                <li className='p__opensans'><a href="#about"> About </a></li>
                <li className='p__opensans'><a href="#contact"> Contact </a></li>
              </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
