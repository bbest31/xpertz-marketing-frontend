
import React from 'react';
import '../CSS/Footer.css';
import { Row, Col } from 'react-bootstrap';

import Logo from '../asset/BLue Logo Side Text.png'

function Footer() {
    return (
        <div className="footer">
            <div className="d-flex flex-row flex-wrap justify-content-center  upper-part">
                <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center footer-logo-div mb-5">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
                    <div className="d-flex flex-row justify-content-center flex-wrap">
                        <div className="d-flex flex-column col-xs-12 col-sm-4 mb-5">
                            <div className="footer-links">
                                <p>Company</p>
                                <hr></hr>
                                <a href="#">About</a>
                            </div>
                        </div>
                        <div className="d-flex flex-column col-xs-12 col-sm-4">
                            <div className="footer-links">
                                <p>Resources</p>
                                <hr></hr>
                                <a href="#">Pricing</a>
                                <a href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-part">
                <div className="d-flex flex-row justify-content-center">
                    <a className="terms" href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="d-flex flex-row justify-content-center copyright">
                    Copyright 2019 Xpertz Software Corp.
                </div>
            </div>
        </div>
    );
}

export default Footer