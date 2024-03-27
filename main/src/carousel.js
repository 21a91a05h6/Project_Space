import ImageSlider from "./ImageSlider";
import {Container,Row,Col} from "reactstrap";
import b1 from './images/carousel_imgs/b1.jpg'
import b2 from './images/carousel_imgs/b2.jpg'
import b3 from './images/carousel_imgs/b3.jpg'
import b4 from './images/carousel_imgs/b4.avif'
import b5 from './images/carousel_imgs/b5.avif'
const Carousel = () => {
  const slides = [
    { url: b1, title: "beach" },
    { url: b2, title: "boat" },
    { url: b3, title: "forest" },
    { url: b4, title: "city" },
    { url: b5, title: "italy" },
  ];
  const containerStyles = {
    maxWidth: "100%",
    height: "100%",
    margin: "0 auto",
  };
  const divStyles={
    maxWidth:"100%"
  }
  return (
    <div>
      <div style={containerStyles}>
        <div style={{divStyles}}>
            <ImageSlider slides={slides} />
            </div>
        
      </div>
    </div>
  );
};

export default Carousel;