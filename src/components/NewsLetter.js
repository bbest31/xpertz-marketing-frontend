
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../CSS/Header.css';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Modal, Form } from 'react-bootstrap';
import xSmall from '../asset/x-small.png';
import Constant from '../constant.json';
import $ from 'jquery';

function NewsLetter() {
    const [show, setShow] = useState(false);
    const [show_error, setShowError] = useState(false);
    const [show_success, setShowSuccess] = useState(false);
    const [msg, setMsg] = useState('');
    const [loader,setLoader] = useState('loaderhide');
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setShowError(false);
        setShowSuccess(false);
        setMsg('');
        setLoader('loaderhide');
    }
    const validateEmail = (email) => {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(email);
    }
    const submitnewsletter = (event) => {
        const email = $("#email").val();
        let count_error = 0;
        if (email == '') {
            $("#email").addClass('has_error');
            count_error++;
        } else {
            if (!validateEmail(email)) {
                $("#email").addClass('has_error');
                count_error++;
            } else {
                $("#email").removeClass('has_error');
            }
        }

        if (count_error == 0) {
            setLoader('loader');
            const data = "email=" + email;
            fetch(Constant.FIREBASE_URL + "/newsletter", {
                method: 'POST',
                headers: {
                    'Accept': 'application/x-www-form-urlencoded',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: data
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        if (result.status == '1') {
                            setShowError(false);
                            setShowSuccess(true);
                            setMsg(result.msg);
                        } else {
                            setShowError(true);
                            setShowSuccess(false);
                            setMsg(result.msg);
                        }
                        setLoader('loaderhide');   
                    },
                )
        }
    }
    return (
        <section>
            <div onClick={handleShow}>
                <Button style={{ backgroundColor: "white", color: "black", fontSize: 42 }} type="button" className="btn btn-secondary btn-lg">
                    <img className="imgSizing" src={xSmall} alt="Logo" height="48" /> Join Newsletter
                </Button>
            </div>

            <div className={loader}></div>

            <Modal show={show} onHide={handleClose} size="md">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className={show_success ? "alert alert-success message_info show" : "alert alert-success message_info hidden"}>{msg}</div>
                        <div className={show_error ? "alert alert-danger message_info show" : "alert alert-danger message_info hidden"}>{msg}</div>
                    </div>
                </div>
                <Modal.Header  style={{display:"grid", justifyContent:"center", border:"none"}}>
                    <Modal.Title style={{fontSize:48, fontWeight:"300"}}>Join Newsletter</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{paddingRight:10 +"rem",paddingLeft:10 +"rem"}}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="fxLabelMargin">Email address</Form.Label>
                            <Form.Control className="fxTxtMarginBottom" size="sm" type="email" id="email"  inputRef={(ref) => { this.email = ref }} required />
                            <Form.Label className="fxLabelMargin">Role in company or group</Form.Label>
                            <Form.Control size="sm" type="email" id="email"  inputRef={(ref) => { this.email = ref }} required />
        
        

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{display:"grid", justifyContent:"center",padding:3+"rem",border:"none"}}>
                    <Button  className="csButton" size="lg" variant="primary" style={{width:12 +"rem",fontSize:36, fontWeight:"300"}} onClick={submitnewsletter}>Join</Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export default NewsLetter
