import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import banner from '../assets/banner1.png'
import Heading from './Heading'
const ContactUs = () => {

  return (
    <Container id='contact'>
        <Heading    
        title="Contact us"
        text="Discover our Latest Events: Unforgettable Experiences Await!"
        text1="Unforgettable Experiences Await!"
      />
          <Grid container>
            <Grid item md={6} marginTop='3rem'>
              <form method="post" id="request" className="main_form">
            
                  <Box >
                            <TextField
                                id="filled-size-small"
                                placeholder='Enter Event ID'

                                size="small" sx={{ width:{md:'70%' , xs:'100%'}, border: '1px solid #adadad ', marginBottom: '1rem', borderRadius: '7px', backgroundColor: 'white' }} />
                  </Box>
                  <Box >
                            <TextField
                                id="filled-size-small"
                                placeholder='Enter Event ID'

                                size="small" sx={{ width:{md:'70%' , xs:'100%'}, border: '1px solid #adadad ', marginBottom: '1rem', borderRadius: '7px', backgroundColor: 'white' }} />
                  </Box>
                  <Box >
                            <TextField
                                id="filled-size-small"
                                placeholder='Enter Event ID'

                                size="small" sx={{ width:{md:'70%' , xs:'100%'}, border: '1px solid #adadad ', marginBottom: '1rem', borderRadius: '7px', backgroundColor: 'white' }} />
                  </Box>
                  <Box >
                            <TextField
                                id="filled-size-small"
                                placeholder='Enter Event ID'

                                size="small" sx={{ width:{md:'70%' , xs:'100%'}, border: '1px solid #adadad ', marginBottom: '1rem', borderRadius: '7px', backgroundColor: 'white' }} />
                  </Box>

                  <Button sx={{width:'70%' , padding:'.5rem 0' ,borderRadius:'10px',marginTop:'1rem'}}
        variant="contained">Contact us</Button>


                
                
              </form>
          
            
            </Grid>
            <Grid item md={6}>
              <div >
                <Image src={banner} alt="#"  style={{width:'100%', height:'400px'}}/>
              </div>
            </Grid>
        
      </Grid>
    </Container>
  )
}

export default ContactUs
