import React from 'react';
import '../CSS/pricing.css';
import { Container, Row, Col,Button } from 'react-bootstrap';
import NewsLetter from '../components/NewsLetter'
import TikIcon from "../asset/done_24px.png";
import XIcon from "../asset/X-icon.png";

function Dashboard() {
  return (
    <div className="pricing-bg" style={{padding:0}}>
        <Container fluid={true} style={{padding:0}}>
          <h1 className="pt-5 pb-5 page-head">Pricing Plans</h1>

          <Row>
            <Col xs={12} md={9} sm={9} lg={9} className="pricing-plan ml-5 pl-5">
              <Row className="panel pricing-table">
                <Col xs={12} md={3} className="pricing-plan">
                  <div className="price-table-top">
                    &nbsp;
                  </div>
                  <ul className="pricing-features1">
                    <li className="pricing-features-item">Max user</li>
                    <li className="pricing-features-item">3rd Party Integrations</li>
                    <li className="pricing-features-item">Project Team Builder</li>
                    <li className="pricing-features-item">Network Rankings</li>
                    <li className="pricing-features-item">project Tracking</li>
                    <li className="pricing-features-item">Organization Insights</li>
                  </ul>
                </Col>

                <Col xs={12} md={3} className="pricing-plan price-table1">
                  <div className="price-table-top">
                    <p className="package-title pt-5">Unlimited Trial</p>
                    <p className="pricing-header1">FREE</p>
                  </div>

                  <ul className="pricing-features">
                    <li className="pricing-features-item">25</li>
                    <li className="pricing-features-item">
                      <img src={TikIcon} />
                    </li>
                    <li className="pricing-features-item">
                      <img src={XIcon} />
                    </li>
                    <li className="pricing-features-item"><img src={XIcon} /></li>
                    <li className="pricing-features-item"><img src={XIcon} /></li>
                    <li className="pricing-features-item"><img src={XIcon} /></li>
                  </ul>
                  <div className="coming-soon">Coming soon</div>
                </Col>
                
                <Col xs={12} md={3} className="pricing-plan price-table2">
                  <div className="price-table-top">
                    <p className="package-title pt-5">Enterprise</p>
                    <p className="pricing-header2 pt-3 pb-4">Contact Sales</p>
                  </div>
                  <ul className="pricing-features">
                    <li className="pricing-features-item">Unlimited</li>
                    <li className="pricing-features-item"><img src={TikIcon} /></li>
                    <li className="pricing-features-item"><img src={TikIcon} /></li>
                    <li className="pricing-features-item"><img src={TikIcon} /></li>
                    <li className="pricing-features-item"><img src={TikIcon} /></li>
                    <li className="pricing-features-item"><img src={TikIcon} /></li>
                  </ul>
                  <div className="coming-soon">Coming soon</div>
                </Col>
                
                <Col xs={12} md={3} className="pricing-plan price-table3">
                  <div className="price-table-top">
                    <p className="package-title pt-5">Business</p>
                    <Row>
                      <Col className="text-right price-icon">$</Col>
                      <Col className="pricing-header3 text-left">5</Col>
                    </Row>
                    <div className="package3">/user/month</div>
                  </div>
                  
                  <ul className="pricing-features">
                    <li className="pricing-features-item">500</li>
                    <li className="pricing-features-item"><img src={TikIcon} /></li>
                    <li className="pricing-features-item"><img src={TikIcon} /></li>
                    <li className="pricing-features-item"><img src={TikIcon} /></li>
                    <li className="pricing-features-item"><img src={XIcon} /></li>
                    <li className="pricing-features-item"><img src={XIcon} /></li>
                  </ul>
                  <div className="coming-soon">Coming soon</div>
                </Col>
              </Row>

              </Col>
            </Row>
         
         <div className="pt-3 pb-3">
          <NewsLetter></NewsLetter>
        </div> 
        </Container>
    </div>
  );
}

export default Dashboard;
