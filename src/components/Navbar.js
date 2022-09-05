import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiFillBug, AiOutlineUser } from 'react-icons/ai';

import { BRAND, HOME_NAV, ABOUT_NAV, WORK_NAV } from '../config/navbar/navbar';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed='top'
      expand='md'
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand>
          <strong>{BRAND}</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto' defaultActiveKey='#home'>
            <Nav.Item>
              <Nav.Link as={Link} to='/' onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} /> {HOME_NAV}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/about'
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: '2px' }} /> {ABOUT_NAV}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/project'
                onClick={() => updateExpanded(false)}
              >
                <AiFillBug style={{ marginBottom: '2px' }} /> {WORK_NAV}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
