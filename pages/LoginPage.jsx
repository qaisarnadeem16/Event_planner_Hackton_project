import React, { useState } from 'react'

import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import loginImg from './assets/1 (2).png'
import Image from 'next/image'
import Link from 'next/link'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Loader from './Components/Loader'
import {auth} from '../Firebase/Config'
import { toast } from 'react-toastify'
import  { useRouter } from 'next/router';


const LoginPage = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();


  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        toast.success('Successfully Login....');
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
        // ..
      });
  }

  return (

    <>
    {isLoading && <Loader/>}
      <Grid container className='loginPage' >
        <Grid item md={6} sx={{ display: { md: 'block', xs: 'none' } }}>
          <Image src={loginImg} alt="" width='100%' />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display='flex' flexDirection='column' sx={{ padding: { md: '5rem 0 0 5rem', xs: '2rem 0 0 2rem' } }} >



            <Box sx={{ marginTop: '2.5rem' }}>
              <Typography sx={{ fontSize: '1.7rem', fontWeight: '600', color: 'white' }}><span>Sign in to Event Planer</span> </Typography>
            </Box>


            <Box>
              <Box sx={{ marginTop: '1.2rem' }}>
                <Box sx={{ marginBottom: '.5rem' }}> <Typography component='span'>Your Email</Typography></Box>
                <TextField
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                  id="filled-size-small"
                  placeholder='Enter your email'
                  size="small" sx={{ width: { md: '70%', xs: '90%' }, border: '1px solid #adadad ', borderRadius: '7px', backgroundColor: 'white' }} />
              </Box>

            </Box>
            <Box>
              <Box sx={{ marginTop: '1.5rem' }}>
                <Box sx={{ marginBottom: '.5rem' }}> <Typography component='span'>Your Password</Typography></Box>
                <TextField placeholder='Password' type="password"
                  value={password}
                  onChange={(e) => SetPassword(e.target.value)}
                  id="filled-size-small"
                  size="small" sx={{ width: { md: '70%', xs: '90%' }, border: '1px solid #adadad ', borderRadius: '7px', backgroundColor: 'white' }} />
              </Box>

            </Box>

            <Box>

              <Box sx={{ marginTop: '.7rem' }} display='flex' alignItems='center'>

                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                <Box > <Link href='./SignUp' style={{ textDecoration: 'none' }}>
                  <Button  sx={{ color: '#00778B', textDecoration: "none", underline: 'none', fontSize: '1rem', fontWeight: '600', marginLeft: { md: '12rem', xs: '3rem' } }}> Sign Up</Button>
                </Link></Box>
              </Box>


            </Box>


            <Box sx={{ marginTop: '1rem' }} display='flex' alignItems='center' >
              <Button onClick={loginUser} variant="contained" sx={{ backgroundColor: '#00778B', width: { md: '70%', xs: '90%' }, padding: '.5rem 0' }}>Login to your acount</Button>
            </Box>



          </Box>
        </Grid>
      </Grid>
    </>
  )
}



export default LoginPage
