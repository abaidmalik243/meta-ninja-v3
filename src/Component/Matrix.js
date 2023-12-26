import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MyImg from '../img/sliderimg1.png';
import MyImg1 from '../img/header-01.png';
import MyImg2 from '../img/image (1).png';
import MyImg3 from '../img/Picture3.jpg';


const Matrix = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
        <Carousel 
  responsive={responsive}
  autoPlay={true}
  autoPlaySpeed={2000}
  infinite={true} 
  showDots={false}
  arrows={false}

>
  <div className='w-full'>
    <img src={MyImg1} alt="" className='w-full h-[700px]'/>
  </div>
  <div className='w-full'>
    <img src={MyImg} alt="" className='w-full h-[700px]'/>
  </div>
  <div className='w-full'>
    <img src={MyImg2} alt="" className='w-full h-[700px]'/>
  </div>
</Carousel>

        



       

</>);
}

export default Matrix;
