import { Box, Container } from '@mui/system'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import Image from 'next/image';
import g1 from '../assets/1 (1).jpg';
import g2 from '../assets/1 (3).jpg';
import g3 from '../assets/banner.jpg';
import Heading from './Heading';

const Gallery = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
    <Container>
    <Heading    
        title="Best Event Organizer"
        text="Discover our Latest Events: Unforgettable Experiences Await!"
        text1="Unforgettable Experiences Await!"
      />
    <Carousel responsive={responsive}>
        <Box borderRadius='2rem'>
            <Image src={g1} alt="" width={350} height={400} />
        </Box>
        <Box borderRadius='2rem'>
            <Image src={g2} alt="" width={350} height={400} />
        </Box>
        <Box borderRadius='2rem'>
            <Image src={g3} alt="" width={350} height={400} />
        </Box>
        <Box borderRadius='2rem'>
            <Image src={g1} alt="" width={350} height={400} />
        </Box>
        <Box borderRadius='2rem'>
            <Image src={g2} alt="" width={350} height={400} />
        </Box>
    </Carousel>
 
 </Container>
   
   </>
  )
}

export default Gallery
