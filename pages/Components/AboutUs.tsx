import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ban from '../assets/ban.png'
import { Box, Container, Grid, Typography } from '@mui/material'
import Heading from './Heading'

const AboutUs = () => {
  return (
    <>
      <Heading
        title="Top Event"
        text="Discover our Latest Events: Unforgettable Experiences Await!"
        text1="Unforgettable Experiences Await!"
      />
     <Container   id="about">

      <Container className="pt-0 pt-lg-4">

        <Grid container className="align-items-center">
          <Grid item xs={12} md={6} sx={{display:{md:'block' , xs:'none'}}}>
            <Image src={ban} className="img-fluid" alt="" width={500} />
          </Grid>

          <Grid item xs={12}  md={6}>
            <Typography component='h1' sx={{fontWeight:'bold' ,fontSize:'1.5rem' ,marginTop:'1rem'}}>At our event planning company, we're passionate about creating unforgettable experiences.</Typography>
            <Typography marginTop='1rem'>
            From intimate gatherings to large-scale conferences, we're dedicated to making your event a success</Typography>
            <Typography marginTop='1rem'>
            Our team of experienced event planners will work with you every step of the way to bring your vision to life. We handle everything from venue selection  and catering to entertainment and decor. With our attention <br/>  <br/> to detail and commitment to excellence, you can relax and enjoy your event knowing that every aspect has been taken care of. Let us help you create an event that your guests will remember for years to come."
              </Typography>
            
          <Link href="#contact">  <div className="btn" >Contact Us  </div></Link>
          </Grid>
         

         
      </Grid>

    </Container>
  </Container>

    </>
  )
}

export default AboutUs
