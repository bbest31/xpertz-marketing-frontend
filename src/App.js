import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import LogoSymbolLeft from './asset/LogoSymbolLeft.png'
import AllLevelLogo1 from './asset/HR.png'
import AllLevelLogo2 from './asset/Symbol.png'
import AllLevelLogo3 from './asset/Frame.png'
import AllLevelLogo4 from './asset/EveryoneIcon.png'
function App() {

  return (
    <div className="App" style={{padding:0}}>
    <Container fluid={true} style={{padding:0}}>
      <div>
      <Row style={{paddingTop:1.5+"rem"}}>
        <Col xs={4}>
        <img src={LogoSymbolLeft} alt="Logo" />
        </Col>
        <Col style={{paddingTop:1.5+"rem", fontSize:24}}>HOME</Col>
        <Col style={{paddingTop:1.5+"rem", fontSize:24}}>PRICING</Col>
        <Col style={{paddingTop:1.5+"rem", fontSize:24}}>ABOUT</Col>
        <Col style={{paddingTop:1.5+"rem", fontSize:24}}>CONTACT US</Col>
      </Row>
      <Row>
      <Col>
        <div style={{paddingTop:3+"rem",fontSize:48}}>
        <p>LARGE SCALE COLLABORATION</p>
        <p>&</p>
        <p>IN-DEPTH SKILL MANAGEMENT</p>
        <hr className="hr">
        </hr>
        </div>

        <div>
        <p style={{fontSize:26,padding:0}}>PUBLIC EXPERTISE PROFILES FOR EMPLOYEES</p>
        <p style={{fontSize:26,padding:0}}>AND INSIGHTFUL ANALYTICS FOR MANAGEMENT</p>
        </div>
        </Col>
      </Row>
      <Row className="level">
        <Col>
        <p style={{fontSize:48,color:"#4F4F4F"}}> BENEFITS AT ALL LEVELS</p>
        </Col>
      </Row>
      <Row style={{color:"black"}}>
        <Col xs={3} style={{backgroundColor:"white",paddingTop:2+"rem",fontSize:24}}>   <img height="180" width="220" src={AllLevelLogo1} alt="Logo" />
        <p className="pt-3">HUMAN RESOURCES</p>
        </Col>
        <Col xs={3} style={{backgroundColor:"white",paddingTop:2+"rem",fontSize:24}}>   <img height="180" width="220" src={AllLevelLogo2} />
        <p className="pt-3"> PROJECT MANAGEMENT</p>
        </Col>
        <Col xs={3} style={{backgroundColor:"white",paddingTop:2+"rem",fontSize:24}}>   <img height="180" width="220" src={AllLevelLogo3} />
        <p className="pt-3">UPPER MANAGEMENT</p>
        </Col>
        <Col xs={3} style={{backgroundColor:"white",paddingTop:2+"rem",fontSize:24}}>   <img height="180" width="220" src={AllLevelLogo4} />
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
    </Container>
    </div>
  );
}

export default App;
