import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FounderImg from "../asset/founder.png"
import NewsLetterButton from '../components/NewsLetter'

function Dashboard() {
  return (
    <div>
      <Container fluid={false} style={{padding:0}}>
          <Row>
            <Col>
              <h1 className="mt-5 pt-5 pb-5 page-head text-center">Our Mission</h1>
              <p>Our mission as a company is to empower companies to make smart data-based decisions when it comes to hiring, personnel allocation, product management, and assessing the collaborative impact employees have by quantifiable metrics.</p>
              <p>Our second pledge is to help employees increase their productivity by bringing a streamlined and fun experience to collaborating with their coworkers in order to feel empowered and the confidence to conquer any challenge.</p>
              <hr className="hr" />

              <h1 className="mt-5 pb-5 page-head text-center">Meet the Team</h1>
              <div className="text-center">
                <img src={FounderImg} />
                <br />
                <p className="founder-name mt-1">
                  Brandon Best<br/>
                  Director, Founder
                </p>
                <p className="founder-msg">
                  “Excited to help companies<br/> make data-driven decisions<br/> when it comes to their<br/> employees”
                </p>
              </div>
            </Col>
          </Row>
      </Container>

      <Container fluid={true} style={{padding:0}} className="pricing-bg">
        <Row style={{color:"white",fontSize:48,fontWeight:"bold",paddingTop:4+"rem",paddingBottom:6+"rem"}}>
            <Col xs={12} className="join-news-letter" >
                <p className="pt-3">JOIN OUR NEWS LETTER FOR UPDATES</p>
                <NewsLetterButton></NewsLetterButton>
            </Col>
        </Row>
      </Container>
       
    </div>
  );
}

export default Dashboard;
