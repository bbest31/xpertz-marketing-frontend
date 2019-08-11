import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Dashboard() {
  return (
    <div >
        <Container fluid={false} style={{padding:0}} className="">
          <Row>
            <Col md={10} sm={10} className="offset-md-1">
              <h1 className="mt-5 pt-5 pb-3 page-head text-center privacy-1">Committed to protecing your data</h1>
              <div className="privacy-2">This privacy policy outlines how we collect, manage your information and what informaition that entails.</div>
              <div className="mt-5 privacy-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet dolor vel sem porta mollis. Mauris congue venenatis placerat. Morbi id vehicula ipsum. Vivamus tortor arcu, vestibulum et nisi rhoncus, sodales ultricies libero. Aliquam laoreet sapien orci, ut imperdiet dolor porta a. Cras et risus a tortor cursus consectetur sit amet sit amet felis. Nam vitae augue lacus. Mauris dignissim rutrum nulla, ac lacinia nulla luctus eget. Integer at eleifend urna. Donec nulla arcu, rutrum a lorem id, vulputate ullamcorper sapien. Nam accumsan finibus sem, eu elementum massa consectetur non. Praesent posuere iaculis massa, nec lacinia lorem ullamcorper et. Mauris imperdiet, eros at venenatis rutrum, sem justo consequat risus, in gravida tortor diam ut justo. Suspendisse potenti. Sed gravida, erat at vestibulum rhoncus, tellus ligula consectetur turpis, quis tempus elit diam eget diam.

Sed est magna, sodales sit amet ornare vitae, pharetra eu massa. Vivamus nec sem erat. Nam convallis volutpat ex, sed egestas lacus maximus sit amet. Etiam ultrices convallis mauris, at vehicula nisl vulputate et. In nulla felis, molestie eget turpis et, sollicitudin rutrum risus. Fusce nec tristique purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas sed pharetra mauris. Suspendisse gravida nulla convallis mauris vestibulum, sed mattis elit gravida. Vivamus non rhoncus urna.

In auctor accumsan sollicitudin. Praesent consequat, urna vitae facilisis malesuada, leo odio congue nibh, at accumsan neque felis eu lectus. In consequat egestas rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in fringilla urna, eget fermentum tellus. Phasellus sit amet arcu lorem. Maecenas tincidunt ornare vehicula.
             </div> 
           
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
