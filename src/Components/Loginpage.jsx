import { Container, Col, Row, Form, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { studentLogin } from "../Services/ELearningServices";
export function Loginpage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState(
        {
            Phone: "", Password: ""
        }
    );
    const [loginError, setLoginError] = useState(false);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const result = await studentLogin(formData);
            console.log(result);
            localStorage.setItem("token", result.token);
            navigate("/");
        } catch (error) {
            console.log(error);
            setLoginError(true);

            setTimeout(() => {
                setLoginError(false);       //to vanish the message after 2 sec
            }, 2000);
        }
    }
    return (
        <Container fluid className="SignInStudent">

            <Row style={{ padding: "150px" }}>
                <Col lg={1}>
                </Col>
                <Col lg={3}>
                    <Alert style={{ background: 'transparent', textAlign: 'center', border: 'none' }}>
                        <h2><b>Welcome to Student Login</b></h2>
                    </Alert>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ color: 'rgb(0,0,153)' }}><b>Username</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" name="Username" value={formData.Username} onChange={handleChange} required pattern="[A-Za-z0-9]{5,20}" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ color: 'rgb(0,0,153)' }}><b>Phone Number</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" name="Phone" value={formData.Phone} onChange={handleChange} required pattern="[0-9]{10}" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ color: 'rgb(0,0,153)' }}><b>Password</b></Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" name="Password" value={formData.Password} onChange={handleChange} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" />
                            <Form.Text className="text-muted">
                                Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
                            </Form.Text>
                        </Form.Group>


                        <Button style={{ backgroundColor: "rgb(0,0,153)" }} type="submit">
                            Login
                        </Button>

                    </Form>
                    {loginError ? <Alert style={{ backgroundColor: "rgb(0,204,102)" }}>Invalid Phone or Password</Alert> : null}
                    <Button className="mt-4" onClick={() => {
                        navigate('/signinadmin');
                    }}>
                        Login as Admin
                    </Button>
                </Col>
                <Col lg={8}>

                </Col>
            </Row>


        </Container>
    );
}