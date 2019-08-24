import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../CSS/Dashboard.css';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import AllLevelLogo1 from '../asset/HR.png'
import AllLevelLogo2 from '../asset/Symbol.png'
import AllLevelLogo3 from '../asset/Frame.png'
import AllLevelLogo4 from '../asset/everyone.png'
import xsection1 from '../asset/large-scale.png'
import xsection2 from '../asset/xsection2.png'
import xsection3 from '../asset/xsection3.png'
import xsection4 from '../asset/xsection4.png'
import xsection from '../asset/X.png'
import NewsLetterButton from '../components/NewsLetter'
import { DashCarousel } from "../components/DashboardCarousel"


function Dashboard() {
  return (
    <div className="dashboard" style={{ padding: 0 }}>
      <Container fluid={true} style={{ padding: 0 }}>
        <div>
          <div className="head-text">
            <p>LARGE SCALE COLLABORATION</p>
            <span>&</span>
            <p>IN-DEPTH SKILL MANAGEMENT</p>
            <hr className="hr"></hr>
          </div>

          <div className="text-center">
            <p className="sub-head-text">PUBLIC EXPERTISE PROFILES FOR EMPLOYEES</p>
            <p className="sub-head-text">AND INSIGHTFUL ANALYTICS FOR MANAGEMENT</p>
          </div>
          <DashCarousel></DashCarousel>
          <Row className="level">
            <Col>
              <p style={{ fontSize: 48, color: "#4F4F4F" }}>BENEFITS AT ALL LEVELS</p>
            </Col>
          </Row>
          <Row style={{ color: "black" }}>
            <Col xs={12} sm={6} md={3} style={{ backgroundColor: "white", paddingTop: 2 + "rem", fontSize: 20 }}>
              <img width="50%" src={AllLevelLogo1} alt="" />
              <p className="pt-3">HUMAN RESOURCES</p>
            </Col>
            <Col xs={12} sm={6} md={3} style={{ backgroundColor: "white", paddingTop: 2 + "rem", fontSize: 20 }}>
              <img width="50%" src={AllLevelLogo2} valt="" />
              <p className="pt-3">PROJECT MANAGEMENT</p>
            </Col>
            <Col xs={12} sm={6} md={3} style={{ backgroundColor: "white", paddingTop: 2 + "rem", fontSize: 20 }}>
              <img width="50%" src={AllLevelLogo3} alt="" />
              <p className="pt-3">UPPER MANAGEMENT</p>
            </Col>
            <Col xs={12} sm={6} md={3} style={{ backgroundColor: "white", paddingTop: 2 + "rem", fontSize: 20 }}>
              <img width="50%" src={AllLevelLogo4} alt="" />
              <p className="pt-3">EVERYONE ELSE</p>
            </Col>
          </Row>
          {/* <Row style={{color:"black"}}>
        <Col xs={3} style={{backgroundColor:"white",paddingTop:2+"rem"}}>  HUMAN RESOURCES</Col>
        <Col xs={3} style={{backgroundColor:"white",paddingTop:2+"rem"}}>  PROJECT MANAGEMENT</Col>
        <Col xs={3} style={{backgroundColor:"white",paddingTop:2+"rem"}}>  UPPER MANAGEMENT</Col>
        <Col xs={3} style={{backgroundColor:"white",paddingTop:2+"rem"}}>  EVERYONE ELSE</Col>
      </Row> */}
        </div>
        <hr className="full-hr"></hr>

        <div className="pt-4 pb-4" style={{ backgroundColor: "white", color: "black", fontWeight: "bold", }}>
          <div className="d-flex flex-row flex-wrap">
            <div className="d-flex flex-column col-md-4 col-xs-12">
              <div className="d-flex flex-row justify-content-center">
                <div className="x-section">
                  <img src={xsection1}/>
                  <p className="pt-1"><strong>LARGE SCALE COLLABORATION</strong></p>
                  <p className="sub d-none d-sm-block">Search for colleagues by skill to find the right person to solve problems</p>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-center">
                <div className="x-section">
                  <img src={xsection3} alt="Logo" />
                  <p className="pt-1"><strong>SKILLED BASED TARGETED HIRING</strong></p>
                  <p className="sub d-none d-sm-block">See how your employees are performing and structural changes are having an impact</p>
                </div>
              </div>
            </div>
            <div className="d-none flex-column col-4 justify-content-center d-md-flex">
              <img className="d-none d-sm-block ml-auto mr-auto x-image" width="260" src={xsection} />
            </div>
            <div className="d-flex flex-column col-md-4 col-xs-12">

              <div className="d-flex flex-row justify-content-center">
                <div className="x-section">
                  <img src={xsection2}/>
                  <p className="pt-1"><strong>ANALYTICS INTO COLLABORATION EFFORTS</strong></p>
                  <p className="sub d-none d-sm-block">quickly identify the skills in high demand for targeting in your recruitment</p>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-center">
                <div className="x-section">
                  <img src={xsection4} alt="Logo" />
                  <p className="pt-1"><strong>ACCURATE RESOURCE ALLOCATION</strong></p>
                  <p className="sub d-none d-sm-block">Concrete insights into the skills present within the company and the level of strength in order to delegate people effectively</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row style={{ color: "white", fontSize: 48, fontWeight: "bold", paddingTop: 4 + "rem", paddingBottom: 6 + "rem" }}>
          <Col xs={12} className="join-news-letter" >
            <p className="pt-3">JOIN OUR NEWS LETTER FOR UPDATES</p>
            <NewsLetterButton> </NewsLetterButton>
          </Col>
        </Row>




      </Container>





    </div>
  );
}

export default Dashboard;


