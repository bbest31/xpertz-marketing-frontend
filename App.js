import React from 'react'; // 123
import './App.css';
import { Container, Row, Col, Button,Modal } from 'react-bootstrap';
import LogoSymbolLeft from './asset/LogoSymbolLeft.png'
import AllLevelLogo1 from './asset/HR.png'
import AllLevelLogo2 from './asset/Symbol.png'
import AllLevelLogo3 from './asset/Frame.png'
import AllLevelLogo4 from './asset/EveryoneIcon.png'
import xsection1 from './asset/xsection1.png'
import xsection2 from './asset/xsection2.png'
import xsection3 from './asset/xsection3.png'
import xsection4 from './asset/xsection4.png'
import xsection from './asset/X.png'

import { DashCarousel } from "./DashboardCarousel"

function App() {
  return (
    <div className="App" style={{ padding: 0 }}>
      <Container fluid={true} style={{ padding: 0 }}>
        <div>
          <Row style={{ paddingTop: 1.5 + "rem" }}>
            <Col xs={4}>
              <img src={LogoSymbolLeft} alt="Logo" />
            </Col>
            <Col style={{ paddingTop: 1.5 + "rem", fontSize: 24 }}>HOME</Col>
            <Col style={{ paddingTop: 1.5 + "rem", fontSize: 24 }}>PRICING</Col>
            <Col style={{ paddingTop: 1.5 + "rem", fontSize: 24 }}>ABOUT</Col>
            <Col style={{ paddingTop: 1.5 + "rem", fontSize: 24 }}>CONTACT US</Col>
          </Row>
          <Row>
            <Col>
              <div style={{ paddingTop: 3 + "rem", fontSize: 48 }}>
                <p>LARGE SCALE COLLABORATION</p>
                <p>&</p>
                <p>IN-DEPTH SKILL MANAGEMENT</p>
                <hr className="hr">
                </hr>
              </div>

              <div>
                <p style={{ fontSize: 26, padding: 0 }}>PUBLIC EXPERTISE PROFILES FOR EMPLOYEES</p>
                <p style={{ fontSize: 26, padding: 0 }}>AND INSIGHTFUL ANALYTICS FOR MANAGEMENT</p>
              </div>
            </Col>
          </Row>
          <DashCarousel></DashCarousel>
          <Row className="level">
            <Col>
              <p style={{ fontSize: 48, color: "#4F4F4F" }}> BENEFITS AT ALL LEVELS</p>
            </Col>
          </Row>
          <Row style={{ color: "black" }}>
            <Col xs={3} style={{ backgroundColor: "white", paddingTop: 2 + "rem", fontSize: 24 }}>   <img height="180" width="220" src={AllLevelLogo1} alt="Logo" />
              <p className="pt-3">HUMAN RESOURCES</p>
            </Col>
            <Col xs={3} style={{ backgroundColor: "white", paddingTop: 2 + "rem", fontSize: 24 }}>   <img height="180" width="220" src={AllLevelLogo2} />
              <p className="pt-3"> PROJECT MANAGEMENT</p>
            </Col>
            <Col xs={3} style={{ backgroundColor: "white", paddingTop: 2 + "rem", fontSize: 24 }}>   <img height="180" width="220" src={AllLevelLogo3} />
              <p className="pt-3">UPPER MANAGEMENT</p>
            </Col>
            <Col xs={3} style={{ backgroundColor: "white", paddingTop: 2 + "rem", fontSize: 24 }}>   <img height="180" width="220" src={AllLevelLogo4} />
              <p className="pt-3"> EVERYONE ELSE</p>
            </Col>
          </Row>
          {/* <Row style={{color:"black"}}>
        <Col xs={3} style={{backgroundColor:"white",paddingTop:2+"rem"}}>  HUMAN RESOURCES</Col>
        <Col xs={3} style={{backgroundColor:"white",paddingTop:2+"rem"}}>  PROJECT MANAGEMENT</Col>
        <Col xs={3} style={{backgroundColor:"white",paddingTop:2+"rem"}}>  UPPER MANAGEMENT</Col>
        <Col xs={3} style={{backgroundColor:"white",paddingTop:2+"rem"}}>  EVERYONE ELSE</Col>
      </Row> */}
        </div>
        <hr className="full-hr">
        </hr>

        <div style={{ backgroundColor: "white", color: "black", fontSize: 28, fontWeight: "bold" }}>
          <Row>
            <Col xs={3} > <img height="240" width="260" src={xsection1} /> <p className="pt-1">LARGE SCALE COLLABORATION</p></Col>
            <Col xs={6} ></Col>
            <Col xs={3} > <img height="240" width="260" src={xsection2} /> <p className="pt-1">ANALYTICS INTO COLLABORATION EFFORTS</p></Col>
          </Row>
          <img style={{}} height="240" width="260" src={xsection} />
          <Row>
            <Col xs={3}> <img height="240" width="260" src={xsection3} alt="Logo" /> <p className="pt-1">SKILLED BASED TARGETED HIRING</p></Col>
            <Col xs={6}></Col>
            <Col xs={3}> <img height="240" width="260" src={xsection4} alt="Logo" /> <p className="pt-1">ACCURATE RESOURCE ALLOCATION</p></Col>
          </Row>
        </div>
        <div>
          <Row style={{ color: "white", fontSize: 48, fontWeight: "bold", paddingTop: 4 + "rem", paddingBottom: 4 + "rem" }}>
            <Col xs={12} ><p className="pt-3">JOIN OUR NEWS LETTER FOR UPDATES</p>
              <Button style={{ backgroundColor: "white", color: "black", fontSize: 42, fontWeight: "bold" }} type="button" className="btn btn-secondary btn-lg">Join NewsLetter</Button>
            </Col>

          </Row>
        </div>
      </Container>



    </div>
  );
}

export default App;
