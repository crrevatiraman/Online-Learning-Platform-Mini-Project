import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import pic1 from "./image/image3.jpg";
import pic2 from "./image/image8.jpg";
import pic3 from "./image/image2.png";
import pic6 from "./image/image9.jpg";
import pic4 from "./image/image10.jpg";
import pic5 from "./image/image11.jpg";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



// export function AllCards(props) {
//   return (
//     <Card style={{ width: '26rem' }}>
//       <Card.Img variant="top" src={pic1}/>
//       <Card.Body>
//         <Card.Title>{props.heading}</Card.Title>
//         <Card.Text>
//           {props.description}
//         </Card.Text>
//         <Button variant="primary">Explore</Button>
//       </Card.Body>
//     </Card>
//   );
// }





  

export function Card1(props) {

  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
    transform: isHovered ? "translateY(-15px)" : "none",
    width: '26rem'
  };

  let navigate=useNavigate();
  const handleClick = ()=>{
  
    navigate("/cplusplus");
  }

  // { width: '26rem'cardStyle{} } 
  return (
    <Card onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}} style={cardStyle}>
      <Card.Img variant="top" src={pic1}/>
      <Card.Body>
        <Card.Title>{props.heading}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Explore</Button>
      </Card.Body>
    </Card>
  );
}

export function Card2(props) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
    transform: isHovered ? "translateY(-15px)" : "none",
    width: '26rem'
  };
  let navigate=useNavigate();
  const handleClick = ()=>{
  
    navigate("/java");
  }
  return (
    <Card onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}} style={cardStyle}>
      <Card.Img variant="top" src={pic2}/>
      <Card.Body>
        <Card.Title>{props.heading}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Explore</Button>
      </Card.Body>
    </Card>
  );
}
export function Card3(props) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
    transform: isHovered ? "translateY(-15px)" : "none",
    width: '26rem'
  };
  let navigate=useNavigate();
  const handleClick = ()=>{
  
    navigate("/python");
  }
  return (
    <Card onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}} style={cardStyle}>
      <Card.Img variant="top" src={pic3}/>
      <Card.Body>
        <Card.Title>{props.heading}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Explore</Button>
      </Card.Body>
    </Card>
  );
}

export function Card4(props) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
    transform: isHovered ? "translateY(-15px)" : "none",
    width: '26rem'
  };
  let navigate=useNavigate();
  const handleClick = ()=>{
  
    navigate("/html");
  }
  return (
    <Card onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}} style={cardStyle}>
      <Card.Img variant="top" src={pic4}/>
      <Card.Body>
        <Card.Title>{props.heading}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Explore</Button>
      </Card.Body>
    </Card>
  );
}
export function Card5(props) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
    transform: isHovered ? "translateY(-15px)" : "none",
    width: '26rem'
  };
  let navigate=useNavigate();
  const handleClick = ()=>{
  
    navigate("/css");
  }
  return (
    <Card onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}} style={cardStyle}>
      <Card.Img variant="top" src={pic5}/>
      <Card.Body>
        <Card.Title>{props.heading}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Explore</Button>
      </Card.Body>
    </Card>
  );
}
export function Card6(props) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
    transform: isHovered ? "translateY(-15px)" : "none",
    width: '26rem'
  };
  let navigate=useNavigate();
  const handleClick = ()=>{
  
    navigate("/javascript");
  }
  return (
    <Card onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}} style={cardStyle}>
      <Card.Img variant="top" src={pic6}/>
      <Card.Body>
        <Card.Title>{props.heading}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Explore</Button>
      </Card.Body>
    </Card>
  );
}