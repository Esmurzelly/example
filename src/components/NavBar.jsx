import React, {useState, useEffect} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg';

import {BrowserRouter as Router} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

export const NavBar = () => {
    const [aciveLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if(window.screenY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll)
    }, []);

    const onUpdateActiveLink = (link) => {
      setActiveLink(link)
    }

    return (
      <Router>
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ""}>
          <Container>
            <Navbar.Brand href="#home">
                <img width={50} src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link 
                  href="#home" 
                  className={aciveLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                  onClick = {() => onUpdateActiveLink('home')}
                >
                  Главная
                  </Nav.Link>
                <Nav.Link 
                  href="#skills" 
                  className={aciveLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                  onClick = {() => onUpdateActiveLink('skills')}
                >
                  Потребление
                </Nav.Link>
                <Nav.Link 
                  href="#projects" 
                  className={aciveLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                  onClick = {() => onUpdateActiveLink('projects')}
                >
                  Виды
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>  
    );
}