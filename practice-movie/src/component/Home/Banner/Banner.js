import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner_1 from "../../../assets/banner_1.png"
import banner_2 from "../../../assets/banner_2.png"
const Banner = () => {
  const arrBanner=[
    {
        id:1,
        image: banner_1,
    },
    {
        id:2,
        image: banner_2,
    },
]
    return (
        
        <Carousel className=' text-white'>
          {arrBanner.map((item)=>(
            <Carousel.Item>
            <img src={item.image} alt="" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          ))}
          
        </Carousel>
      );
};

export default Banner;