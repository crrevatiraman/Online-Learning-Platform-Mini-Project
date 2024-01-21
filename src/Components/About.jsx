import { Alert, Col, Container, Row,Image } from "react-bootstrap";

import photo1 from './image/image12.png';
import photo2 from './image/image13.png';
export function About() {
    return (
        <Container className="mt-5">
            <h1><u>About Us</u></h1>
            <Row><Image src={photo2}/></Row> 
            <Row>
            <Col className="lg-4">
                <h1>Mission</h1>
                <p>At VNR Learning, our mission is to empower individuals globally by providing accessible, high-quality education that transcends boundaries. We are dedicated to fostering a dynamic learning community where curiosity is sparked, skills are honed, and aspirations are realized. Through innovative and engaging courses, we aim to inspire a lifelong love for learning, equipping our learners with the knowledge and skills needed to thrive in an ever-evolving world. Join us on a journey of discovery, growth, and achievement as we strive to make education a transformative and enriching experience for everyone.</p>
            </Col >
            <Col className="lg-4">
                <h1>Vision</h1>
                <p>At VNR Learning, our vision is to be a global leader in transformative education, shaping a future where learning knows no bounds. We envision a world where every individual, regardless of background or location, has access to personalized and empowering educational experiences. Through cutting-edge technology and a commitment to innovation, we strive to revolutionize the way people learn, unlocking their full potential and preparing them for success in a rapidly changing world. Our vision is to cultivate a community of lifelong learners who are not only equipped with knowledge but inspired to make a positive impact on society. Join us as we envision and create a future where education transcends traditional boundaries and becomes a catalyst for positive change.</p>
            </Col>
            <Col className="lg-4">
                <h1>Our History</h1>
                <p>Established in 2020, VNR Learning embarked on a journey with a vision to revolutionize education and empower learners worldwide. From our humble beginnings, we have grown into a dynamic and innovative eLearning platform, dedicated to providing transformative educational experiences.

Our story began when a team of passionate educators and technologists came together with a shared belief in the power of education to change lives. Since our inception, we have been on a mission to make learning accessible, engaging, and impactful for learners of all ages and backgrounds.

Over the years, we have achieved significant milestones, from the launch of our first courses to the development of cutting-edge learning technologies. Our commitment to quality education has garnered recognition, and we are proud to have served thousands of learners who have found success through our platform.</p>
            </Col>
            </Row>

            <Row><Image src={photo1} /></Row>
        </Container>
    );
}