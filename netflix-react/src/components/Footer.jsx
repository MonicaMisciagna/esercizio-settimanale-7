import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer >
      <Container fluid className="mt-5">
        <Row className="text-center">
          <Col xs={6} className="offset-3">
            <Row>
              <Col xs={12} className="text-left mb-2">
                <FaFacebookSquare className='m-2'/>
                <FaInstagram className='m-2' />
                <FaTwitterSquare className='m-2'/>
                <FaYoutubeSquare className='m-2'/>
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <Col>
                <Row>
                  <Col xs={12} className="footer-links">
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Audio and Subtitles</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Media Center</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Privacy</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Contact us</a></p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col xs={12} className="footer-links">
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Audio Description</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Investor Relations</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Legal Notices</a></p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col xs={12} className="footer-links">
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Help Center</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Jobs</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Cookie Preferences</a></p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col xs={12} className="footer-links">
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Gift Cards</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Terms of Use</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Corporate Information</a></p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="text-left mb-2">
                <Button type="button" variant='dark' className="btn btn-outline-light btn-sm footer-button rounded-0 mt-3">
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="text-left mb-2 mt-2 copyright">
                © 1997-2022 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
