import React, {useEffect} from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from "reactstrap";
import abtus from '../assets/images/abtus.png';
import '../styles/aboutus.css'
import img from '../assets/images/a&m-store.jpeg'



const Aboutus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Helmet title='About Us'>

  <CommonSection title='#KnowUs'/>
  <Container>
    <Row>
      
        
        <Col lg='7'>
          <div class="about-us">
          <h2>About Mystery Cubes</h2>
          <p>Hey! I am Nihith and am currently an engineering undergrad in Hyderabad and I will be honest I was really lazy in typing this paragraph out. In fact, this is the last page I developed for the entire website. But anyway let me give you a brief idea of what we wanna do at Mystery Cubes. Honestly, we don't know either, I just had an idea, developed the website, put some money from a few side hustles and internships aside and started this. I dont really have a vision with this either(I am rethinking my life choices rn). But what I do know is, I wanna do this in a proper and professional scale and the merch, the place I source it from, I personally buy my clothes from there and absolutely love the quality for the price. And coming to the mystery boxes, I hope your luck's good because we got gifts ranging all the way from Airpods and other expensive gadgets(really rethinking my life choices again) to even rocks in a few. So wish you the best of luck, all you can join the Whatsapp group and share the items you recieved;)</p>
          <br></br><p>P.S., connect with me on LinkedIn <a href="https://www.linkedin.com/in/nihitht/">Here</a></p>
          <br></br><p>P.SSS, what do you think of the image on the right(or below depending on your device), I got an actual graphic designer to design it, don't ask me why.</p>
          </div>
        </Col>
        <Col className="imgg" lg='5'>
        <img src="/logo_final.jpeg" alt="Mystery Cubes Logo"/>
        </Col>

      {/*<Col lg='5' >
        <img className="image" src={abtus} alt="" />
      </Col>
      
      <Col lg='7'>
      <h2 className="h223">Who?</h2>
      <p className="pp">A&M was founded by A and M, two fashion enthusiasts with a shared passion for creating a clothing brand that embodies style, quality, and authenticity. With a combined experience in the fashion industry, they set out on a mission to offer a curated selection of garments that capture the essence of contemporary fashion while maintaining a timeless appeal. A's keen eye for design and M's expertise in sourcing and manufacturing enable them to deliver products that meet the highest standards of craftsmanship. Inspired by their own personal styles and a desire to make fashion accessible to all, A and M strive to create a brand that resonates with individuals seeking confidence and self-expression through their clothing choices. As founders of A&M, they are dedicated to providing exceptional customer experiences and are constantly seeking innovative ways to push the boundaries of fashion.</p>
      </Col>*/}
    </Row>
  </Container>


</Helmet>
};

export default Aboutus;