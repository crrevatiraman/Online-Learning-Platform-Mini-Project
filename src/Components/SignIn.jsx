// import { Container } from "react-bootstrap";

// export function SignIn() {
//     return (
//         <Container>
//             <div><h>Java Tutorial</h>
//                 <p>ava Training
//                     Our core Java programming tutorial is designed for students and working professionals. Java is an object-oriented, class-based, concurrent, secured and general-purpose computer-programming language. It is a widely used robust technology.</p>
//             </div>
//         </Container>
//     );
// }
// import React, { useState } from "react";
// import { Container, Form, Button} from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom"; // Import for navigation

// export function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // Navigate to next page

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Simulate login API call
//     const response = await fetch("http://127.0.0.1:4900/student", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });

//     // if (response.ok) {
//     //   // Login successful
//     //   navigate("/"); // Navigate to contact page
//     //   alert("Login successful!"); // Show success message
//     // }
//     // else {
//     //   // Login failed
//     //   alert("Invalid email or password!"); // Show error message
//     // }
//     if (response.ok) {
//       // Check if the server response indicates a successful login
//         // Login successful
//         navigate("/"); // Navigate to the home page
//         alert("Login successful!"); // Show success message
//       } else {
//         // Login failed
//         alert("Invalid email or password!"); // Show error message
//       }
//     // } else {
//     //   // Server request failed
//     //   alert("Server error. Please try again later."); // Show error message
//     // }
//   }
//   return (
//     <Container className="vh-100 d-flex align-items-center justify-content-center auth-wrapper">
//       <div className="auth-inner">
//         <Form onSubmit={handleSubmit}>
//           <h3>Sign In</h3>

//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="customCheck1"
//               />
//               <label className="custom-control-label" htmlFor="customCheck1">
//                 Terms and Conditions
//               </label>
//             </div>
//           </div>
//           <Button type="submit" className="btn btn-primary align-items-center justify-content-center">
//             Submit
//           </Button><br />
//           <Link to="/forgot-password">Forgot Password?</Link>
//         </Form>
//       </div>
//     </Container>
//   );
// };
import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { login } from "../Services/AdminService";
import { useNavigate } from "react-router-dom";

export function SignIn() {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({email:"",password:""});
    const [loginError,setLoginError]=useState(false);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const navigate = useNavigate();

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const result= await login(formData);
          localStorage.setItem("token",result.token);
          navigate("/");
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    }
    return (
        <Container className="mt-5">
            <Row>
                <Col lg={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" name="email" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    {loginError?<Alert variant="danger" className="mt-3">Invalid phone or password</Alert>:null}
                </Col>
            </Row>
        </Container>
    );
}