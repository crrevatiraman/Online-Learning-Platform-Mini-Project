import { Alert,Container,Row,Col,Image } from "react-bootstrap";
import {ImageSlider} from './ImageSlider.jsx';
import {Card1,Card2,Card3,Card4,Card5,Card6 } from "./AllCards.jsx";
import photo1 from './image/image14.png';
import photo2 from './image/image19.png';
import banner1 from './image/banner1.png';
import './AllCssFile.css';

export function Home() {
    return (
       
        <Container fluid className="Homepage  d-flex flex-column align-items-center justify-content-center">
           
            <ImageSlider></ImageSlider>
            
           <Row><Image src={photo2}/></Row> 
           <Row className="mt-2"><Alert className="Alert"  style={{width:'1500px'  ,borderRadius:'12px', color:'white', textAlign:"center"}}><h3>Trending Languages</h3></Alert></Row> 
            
            <Row>
                <Col lg={4}> 
                <Card1 heading="C++" description="Complete C++ Learning Program from where you start you programing and logic building Mastery with the Language of Efficiency and Performance "></Card1>
                </Col>
                <Col lg={4}> 
                <Card2 heading="Java" description="Learn Object Oriented Programing with JAVA to build strong foundation in programming principles. Unleashing the Potential of Platform Independence"></Card2>
                </Col>
                <Col lg={4}> 
                <Card3 heading="Python" description="Start Machine Learning with building concepts in Python to elevate your career by gaining valuable skills"></Card3>
                </Col>
            </Row>
            <br></br>
            <Row><Image src={photo1}/></Row>
            <Row className="mt-3"><Alert className="Alert" style={{width:'1500px' ,backgroundColor:'rgb(0,0,0)' ,borderRadius:'12px', color:'white', textAlign:"center"}}><h3>Trending in Web Technologies</h3></Alert></Row>
           
            <Row>
                <Col lg-4> 
                <Card4 heading="HTML" description="Crafting Tomorrow's Web Today: Unleash Your Creativity with HTML Mastery.Building the Digital Foundation for Boundless Creativity."></Card4>
                </Col>
                <Col lg-4> 
                <Card5 heading="CSS" description="Elevate Your Designs: Transforming Ideas into Stylish Realities with CSS Magic. Unleash the Power of Style for a Stunning Web Experience."></Card5>
                </Col>
                <Col lg-4> 
                <Card6 heading="Javascript" description="avaScript: Breathing Life into the Web's DNA. Transforming Ideas into Dynamic Experiences.Where Innovation Meets Interactivity."></Card6>
                </Col>
            </Row>
            
            <br></br>
            <Row><Image src={banner1}/></Row>
            </Container>
    );
}