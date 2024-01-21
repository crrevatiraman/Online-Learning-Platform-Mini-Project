import { Carousel } from "react-bootstrap";
import image4 from "./image/image4.jpg";
import image6 from "./image/image6.png";
import image7 from "./image/image7.png";
export function ImageSlider() {
  const carouselItemStyle = {
    height: "600px", // Adjust the height as needed
    
  };
  return (
    <Carousel style={{width:'100%'}}>
      <Carousel.Item style={carouselItemStyle}>
        <img
          className="d-block w-100"
          src={image4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to VNR Learning</h3>
         
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item style={carouselItemStyle}>
      <img
          className="d-block w-100"
          src={image6}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to VNR Learning</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselItemStyle}>
      <img
          className="d-block w-100"
          src={image7}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to VNR Learning</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;