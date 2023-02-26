import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Heading = (props) => {
  return (
    <>
     <Box sx={{ color: "white" , margin:'3rem 0'}} display='flex' flexDirection='column' alignItems='center' justifyContent='center' >
          <Typography   sx={{fontSize:{xs:"1.2rem",md:"3rem"}, fontWeight:"400" ,color:'white'}}>
            {props.title}
            </Typography>
                <Typography sx={{fontSize:{xs:".85rem", md:"1rem", textAlign: 'center' }}}>
                    {props.text}
                    <br />
                    {props.text1}
                </Typography>
            </Box>
    </>
  )
}

export default Heading