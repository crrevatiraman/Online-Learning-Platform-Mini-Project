import { useState } from "react";
import { Container, Col, Row, Form, Alert, Button } from "react-bootstrap";
import './AllCssFile.css';
import { login } from "../Services/AdminServices";
import { useNavigate } from "react-router-dom";
export function SignInAdmin() {

    const navigate=useNavigate();

    const [formData, setFormData] = useState(
        {
            Phone:"",Password:""
        }
    );
    const [loginError,setLoginError]=useState(false);
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        

        try {
           const result = await login(formData);
           console.log(result);
           localStorage.setItem("token",result.token);
            navigate("/admin");
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    }

    return (

        <Container fluid className="SignInAdmin">

            <Row style={{padding:"150px"}}>
                <Col lg={1}>
                </Col>
                <Col lg={3}>
                    <Alert style={{ background: 'transparent', textAlign: 'center', border: 'none',color:'white' }}>
                        <h2><b>Welcome to Admin Login</b></h2>
                    </Alert>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{color:'white'}}><b>Username</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" name="Username" value={formData.Username} onChange={handleChange} required pattern="[A-Za-z0-9]{5,20}" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{color:'white'}}><b>Phone Number</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" name="Phone" value={formData.Phone} onChange={handleChange} required pattern="[0-9]{10}" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{color:'white'}}><b>Password</b></Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" name="Password" value={formData.Password} onChange={handleChange} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" />
                            <Form.Text className="text" style={{color:'white'}}>
                              <p>Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</p>
                            </Form.Text>
                        </Form.Group>


                        <Button style={{ backgroundColor: "rgb(0,0,153)" }} type="submit">
                            Login
                        </Button>
                       

                    </Form>
                    {loginError?<Alert style={{ backgroundColor: "rgb(0,204,102)",color:'white'}}>Invalid Phone or Password</Alert>:null}
                </Col>
                <Col lg={7}>

                </Col>
            </Row>
            

        </Container>

    );
}