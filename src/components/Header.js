
import React from 'react';
import '../CSS/Header.css';
import { Row, Col } from 'react-bootstrap';
import LogoSymbolLeft from '../asset/LogoSymbolLeft.png'
var Link = require('react-router-component').Link

function Header() {
    return (
        <Row className="header" style={{paddingTop:1.5+"rem"}}>
            <Col xs={4}>
                <img src={LogoSymbolLeft} alt="Logo" />
            </Col>
            <Col className="header-link" >
                <Link href="/">HOME</Link>
            </Col>
            <Col className="header-link" >
                <Link href="/pricing">PRICING</Link>
            </Col>
            <Col className="header-link" >
                <Link href="/about">ABOUT</Link>
            </Col>
            <Col className="header-link" >
                <Link href="/contact">CONTACT US</Link>
            </Col>
        </Row>
    );
}

export default Header