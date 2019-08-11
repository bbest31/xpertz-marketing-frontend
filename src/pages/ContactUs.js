import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Dashboard() {
  return (
    <div >
        <Container fluid={false} style={{padding:0}} className="">
          <Row>
            <Col md={10} sm={10} className="offset-md-1">
              <h1 className="mt-5 pt-5 pb-3 page-head text-center contact-head">Contact Us</h1>
              <div className="text-left contact-2nd">For all inquiries please email brandon.best@xpertzsoftware.com</div>
              <div className="mt-5">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col}></Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.Label>Subject <span className="text-danger">*</span></Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Message <span className="text-danger">*</span> </Form.Label>
                  <Form.Control as="textarea" rows="5" />
                </Form.Group>
                <div className="text-center">
                  <Form.Group className="check-btn-area mb-4">
                    <Form.Check   type="checkbox" label="I would like to be added to the Xpertz newsletter for updates on upcoming features" />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="send-btn mr-2 pr-4 pl-4">
                    Send
                  </Button>
                  <Button variant="light" type="submit" className="cancle-btn">
                    Cancel
                  </Button>
                </div>
              </Form>
             </div> 
           
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
