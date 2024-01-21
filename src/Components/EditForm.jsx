import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchStudentByPhone, updateStudent } from '../Services/ELearningServices';
import './AllCssFile.css';
export const EditForm = () => {

    const params = useParams();

    const [formData, setFormData] = useState({

        Name: '',
        Username: '',
        Password: '',
        Gender: '',
        Phone: '',
        Email: ''
    });

    // -----------------------------------------------------------to print inserted sucessful or not message on page-----------------
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    //---------------------------------------to update the data on database-----------------------------------------------------------
    const handleSubmit = async (e) => {

        e.preventDefault();
        //console.log(formData);

        try {
            const result = await updateStudent(formData, params.Phone);
            console.log(result);

            setIsSubmitted(true);


            setTimeout(() => {
                setIsSubmitted(false)       //to vanish the update successful message after 2 sec
            }, 2000);

        } catch (error) {
            console.log(error);
        }
    };

    //-----------------------------------------to fetch the existing data of the learner with phone number-----------------------------------------------------------------------------

    const populateStudentState = async () => {
        try {
            const result = await fetchStudentByPhone(params.Phone);
            setFormData(result.student);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        populateStudentState();
    },[]);

    return (
        <Container fluid className="updateForm">
            <Row>
                <Col lg={2}>

                </Col>
                <Col lg={4}>
                    <Alert style={{ background: 'transparent', textAlign: 'center', border: 'none', color: 'white' }}>
                        <h2>Update the Credentials</h2>
                    </Alert>
                    {formData ?
                        <Form onSubmit={handleSubmit}>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{ color: 'white' }}><b>Name</b></Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="Name" value={formData.Name} onChange={handleChange} required pattern="[A-Za-z ]{1,20}" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{ color: 'white' }}><b>Username</b></Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" name="Username" value={formData.Username} onChange={handleChange} required pattern="[A-Za-z0-9]{5,20}" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{ color: 'white' }}><b>Password</b></Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" name="Password" value={formData.Password} onChange={handleChange} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" />
                                <Form.Text className="text" style={{ color: 'white' }}>
                                    Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{ color: 'white' }}><b>Gender</b></Form.Label>
                                <Row>
                                    <Col >
                                        <Form.Check style={{ color: 'white' }}
                                            type="radio"
                                            label="Male"
                                            name="Gender"
                                            value="male"
                                            onChange={handleChange}
                                            checked={formData.Gender === "male" ? true : false}
                                            required />
                                    </Col>
                                    <Col >
                                        <Form.Check style={{ color: 'white' }}
                                            type="radio"
                                            label="Female"
                                            name="Gender"
                                            value="female"
                                            onChange={handleChange}
                                            checked={formData.Gender === "female" ? true : false}
                                            required />
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{ color: 'white' }}><b>Phone Number</b></Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone Number" name="Phone" value={formData.Phone} onChange={handleChange} required pattern="[0-9]{10}" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{ color: 'white' }}><b>Email Address</b></Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" name="Email" value={formData.Email} onChange={handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form> : <h3>No Learner Fount</h3>}
                </Col>
                <Col lg={6}>

                </Col>
            </Row>
            <Row className='mt-3'>
                <Col lg={2}>

                </Col>
                <Col lg={4}>
                    {isSubmitted ? <Alert variant='success'>Updated Successfully</Alert> : null}
                </Col>
            </Row>
        </Container>
    );
};

