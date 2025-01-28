import React,{useEffect} from "react";
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import {Link} from "react-router-dom";

const Footer = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  
  const year = new Date().getFullYear()
  return <footer className="footer">
    
  
    <Container>
      <Row>
        <Col lg='12' className="mb-4" md='6'>
          <div className="logo">
            <img src="/logo192.jpg" alt="logo" />

            
          </div>
        </Col>

        <Col lg='4' md='3' className="mb-4">
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Top Categories</h4>
            <ListGroup className="mb-3">
              <ListGroupItem className="ps-0 border-0">
                <Link to='/boxes'>Mystery Boxes</Link>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0">
                <Link to='/hoodies'>Hoodies(COMING SOON)</Link>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0">
                <Link to='/tees'>Printed Tees(COMING SOON)</Link>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0">
                <Link to='/f1'>F1 Merch(COMING SOON)</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='4' md='3' className="mb-4">
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Useful Links</h4>
            <ListGroup className="mb-3">
              <ListGroupItem className="ps-0 border-0">
                <Link to='/Home'>Home</Link>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0">
                <Link to='/Shop'>Shop</Link>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0">
                <Link to='/Cart'>Cart</Link>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0">
                <Link to='/PrivacyPolicy'>Privacy policy</Link>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0">
                <Link to='/TermsAndConditions'>Terms and Conditions</Link>
              </ListGroupItem>

              
            </ListGroup>
          </div>
        </Col>

        <Col lg='4'  className="mb-4">
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Contact</h4>
            <ListGroup className="mb-3">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span><i class="ri-map-pin-line"></i></span>
                <p> Miyapur, Hyderabad, India (500049)</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
              <span><i class="ri-phone-line"></i></span>
                <p>+91-7330962093, +91-6301336657</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
              <span><i class="ri-mail-line"></i></span>
                <p>mysterycubes.in@gmail.com</p>
              </ListGroupItem>

              


              
            </ListGroup>
          </div>
        </Col>
        <Col className="text-center social" lg='12'>
        <p className="socialp">
          <a href="/home" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="/home" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a href="/home" target="_blank" rel="noopener noreferrer">
          <i class="ri-pinterest-fill"></i>
          </a>
          <a href="https://chat.whatsapp.com/D3C7pdBVqK4LiGAN3P5E6K" target="_blank" rel="noopener noreferrer">
          <i class="ri-whatsapp-line"></i>
          </a>
        </p>
        </Col>





        <Col lg='12'>
          <p className="footer__copyright">MysteryCubes <i class="ri-copyright-line"></i> 2025. All rights reserved. </p>
          <p className="footer__text mt-4">Mystery Cubes is the brainchild of a bunch of 21-year-old "chill guys" from Hyderabad who were bored and decided to do something cool. We’re all about fun, surprises, and good vibes—whether it’s our mystery boxes, hoodies, tees, or F1 merch. It’s like a treasure hunt but from the comfort of your couch. If you’re into chill, unique stuff and love a good surprise, Mystery Cubes is where it’s at.</p>
        </Col>
      </Row>
    </Container>
  </footer>
};

export default Footer;