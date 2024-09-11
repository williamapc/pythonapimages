import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: 'darkblue',
};

const Header = (props) => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
        <Logo style={{ maxWidth: '44rem', maxHeight: '2rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
