import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import NewsLetter from '../components/NewsLetter'

function Dashboard() {
  return (
    <div className="pricing-bg" style={{padding:0}}>
        <Container fluid={true} style={{padding:0}}>
          <h1 className="pt-5 pb-5">Pricing Plan</h1>

          <Row>
            <Col xs={12} md={8} sm={8} lg={8} className="pricing-plan ml-5 pl-5">

              <Row className="panel pricing-table">
                <Col xs={12} md={3} className="pricing-plan">
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <ul className="pricing-features">
                    <li className="pricing-features-item">Max user</li>
                    <li className="pricing-features-item">3rd Party Integrations</li>
                    <li className="pricing-features-item">Project Team Builder</li>
                    <li className="pricing-features-item">Network Rankings</li>
                    <li className="pricing-features-item">project Tracking</li>
                    <li className="pricing-features-item">Organization Insights</li>
                  </ul>
                </Col>

                <Col xs={12} md={3} className="pricing-plan price-table1">
                  <p>Unlimited Trial</p>
                  <h2 className="pricing-header">FREE</h2>
                  <ul className="pricing-features">
                    <li className="pricing-features-item">Custom domains</li>
                    <li className="pricing-features-item">Custom domains </li>
                    <li className="pricing-features-item">Custom domains </li>
                    <li className="pricing-features-item">Custom domains </li>
                    <li className="pricing-features-item">Custom domains </li>
                    <li className="pricing-features-item">Custom domains </li>
                  </ul>
                  <a href="#/" className="">Coming soon</a>
                </Col>
                
                <Col xs={12} md={3} className="pricing-plan price-table2">
                  <p>Enterprise</p>
                  <h2 className="pricing-header">Contact Sales</h2>
                  <ul className="pricing-features">
                  <li className="pricing-features-item">Custom domains</li>
                    <li className="pricing-features-item">Custom domains </li>
                    <li className="pricing-features-item">Custom domains </li>
                    <li className="pricing-features-item">Custom domains </li>
                    <li className="pricing-features-item">Custom domains </li>
                    <li className="pricing-features-item">Custom domains </li>
                  </ul>
              
                  <a href="#/" className="">Coming soon</a>
                </Col>
                
                <Col xs={12} md={3} className="pricing-plan price-table3">
                  <p>Business</p>
                  <h2 className="pricing-header">$5</h2>
                  <p>/user/month</p>
                  <ul className="pricing-features">
                  <li className="pricing-features-item">Custom domains</li>
                    <li className="pricing-features-item">Custom domains </li>
                    <li className="pricing-features-item">Custom domains </li>
                    <li className="pricing-features-item">Custom domains </li>
                    <li className="pricing-features-item">Custom domains </li>
                    <li className="pricing-features-item">Custom domains </li>
                  </ul>
                  <a href="#/" className="">Coming soon</a>
                </Col>
              </Row>

              </Col>
            </Row>
         
         <div className="pt-5 pb-5">
          <NewsLetter></NewsLetter>
        </div> 
        </Container>
    </div>
  );
}

export default Dashboard;
