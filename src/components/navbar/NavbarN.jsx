import React from 'react';
import './navbar.scss';
import Nav from 'react-bootstrap/Nav'
import BtnViolet from '../botones/BtnViolet';
import BtnBlueTransparent from '../botones/BtnBlueTransparent';

function NavbarN() {
    return (
        <nav className='navbar' >
          <p className='navbar_uno'>Lateral</p>
          <Nav.Link href="#build" className='navbar_home'>HOME</Nav.Link>
          <Nav.Link href="#features">FEATURES</Nav.Link>
          <Nav.Link href="#pricing">PRICING</Nav.Link>
          <Nav.Link href="#">CONTACT</Nav.Link>
          <BtnBlueTransparent title={'LOGIN'} className='navbar_btn' />
          <BtnViolet title={'GET STARTED'} className='navbar_btn' />
        </nav>
    );
};
export default NavbarN;
