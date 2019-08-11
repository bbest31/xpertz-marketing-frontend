
import React from 'react';
import '../CSS/Header.css';
import {Container,Row, Col } from 'react-bootstrap';
import LogoSymbolLeft from '../asset/LogoSymbolLeft.png'
var Link = require('react-router-component').Link

function Header() {
    return (
        <Container fluid={true} className="header-bg">
            <Row className="header" style={{paddingTop:1.5+"rem"}}>
                <Col xs={12} sm={4} md={4}>
                    <img src={LogoSymbolLeft} className="responsive" alt="Xpertz" />
                </Col>
                <Col className="header-link" >
                    <Link href="/">home</Link>
                </Col>
                <Col className="header-link" >
                    <Link href="/pricing">pricing</Link>
                </Col>
                <Col className="header-link" >
                    <Link href="/about">about</Link>
                </Col>
                <Col className="header-link" >
                    <Link href="/contact">contact us</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Header