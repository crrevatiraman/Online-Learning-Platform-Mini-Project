import { Container,Row,Col} from "react-bootstrap";
import React from 'react';
import './AllCssFile.css';

const footerStyle = {
    backgroundColor: '#333', // Set your desired background color
    color: '#fff',           // Set your desired text color
    padding: '80px', 
          // Set padding as needed
     
  };

export function Footer() {
    return (
        <footer className=" Footer" style={footerStyle}>
      <Container >
        <Row>
          <Col md={3}>
            <h3>VNR Learning</h3>
            <p>Address: Raintree Marg, near Bharati Vidyapeeth, Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614</p>
            <p>Sponsered By: CDAC Mumbai</p>
          </Col>
          <Col md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/">Facebook</a></li>
              <li><a href="https://twitter.com/x">Twitter</a></li>
              <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
              <li><a href="#https://www.instagram.com/accounts/login/">Instagram</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Top References</h5>
            <ul className="list-unstyled">
              <li><a href="#facebook">HTML Reference</a></li>
              <li><a href="#twitter">JavaScript Reference</a></li>
              <li><a href="#linkedin">Bootstrap Reference</a></li>
              <li><a href="#instagram">React Reference</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    );
}

