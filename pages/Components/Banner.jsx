import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import banner from '../assets/1 (1).jpg'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  const styles = {
    root: {
      width: '100%'
      , marginTop: '1rem'
    },
  };
  return (
    <>
      <Grid container display='flex' sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }} justifyContent='space-between'>
        <Grid item xs={12} md={6} display="flex" alignItems='center' justifyContent='center' sx={{ marginTop: { md: "2.5rem", xs: "2rem" } }}>
          <Box sx={{ color: 'white' }}  >
            <Typography sx={{ fontSize: { md: "4rem", xs: "2rem" }, fontWeight: { md: "600", xs: "100" } }}>Plan your perfect <br /> event, hassle-free</Typography>
            <Typography sx={{ fontSize: { xs: ".8rem", md: "1.2rem" } }}>Event planning made easy - our platform streamlines <br /> the process from start to finish, giving you more <br /> time to focus on what really matters - <br /> creating memorable experiences."

            </Typography>
            <Link href='../CreateEvent'  >
              <Button sx={{ background: "#EF2779", color: "white", marginTop: "1.5rem", borderRadius: "2rem", padding: ".7rem 2.1rem" }}>Join Event</Button>
            </Link>
            <Link href='../CreateEvent'  >

            <Button sx={{ background: "gray", color: "white", margin: "1.5rem 0 0 2rem", borderRadius: "2rem", padding: ".7rem 2.5rem" }}>Create Event</Button>
            </Link>

          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { md: 'block', xs: 'none' }, }}>
          <Box style={styles.root}>
            <Image src={banner} alt="" width={700} />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Banner
