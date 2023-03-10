import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MailchimpForm from './MailchimpForm';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

const Footer = () => {
    return ( 
        <footer className="footer">
            <Container>
                <Row className='align-item-center'>
                    <MailchimpForm />
                    <Col sm={6}></Col>
                    <Col className='text-center text-sm-end' sm={6}>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
     );
}
 
export default Footer;