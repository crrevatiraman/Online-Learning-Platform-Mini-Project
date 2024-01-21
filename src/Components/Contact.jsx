import { Container, Row, Image, Col } from "react-bootstrap";

import pic1 from "./image/230940320127.png";
import pic2 from "./image/230940520065.jpeg";
import pic3 from "./image/230940320067.png";
import banner2 from "./image/banner2.png";

export function Contact() {
    return (
        <Container fluid className="align-items-center justify-content-center" style={{ backgroundColor: 'black', textAlign: "center" }}>
            <Row><Image src={banner2}></Image></Row>

            <Row className="mt-4 align-items-center justify-content-center" style={{color:'white'}}>

                <Col xs={6} md={3}>
                    <Image style={{height:'300px'}} src={pic1} rounded />
                    <h3>Vedant Sahu</h3>
                    <h5>vedantsahu668@gmail.com</h5>
                    <h5>9993161044</h5>
                </Col>
                <Col xs={6} md={3}>
                    <Image style={{height:'300px'}} src={pic2} rounded />
                    <h3>Revatiraman Chaudhari</h3>
                    <h5>crrevatiraman@gmail.com</h5>
                    <h5>8261896077</h5>
                </Col>
                <Col xs={6} md={3}>
                    <Image style={{height:'300px'}} src={pic3} rounded />
                    <h3>Nehal Mahajan</h3>
                    <h5>crrevatiraman@gmail.com</h5>
                    <h5>8261896077</h5>
                </Col>
            </Row>

        </Container>
    );
}