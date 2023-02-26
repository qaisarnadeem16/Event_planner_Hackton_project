import { Segment } from '@mui/icons-material'
import { AppBar, Avatar, Box, Button, Container, Drawer, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { toast } from 'react-toastify';
import logo from '../assets/log.png';
import{auth} from '../../Firebase/Config'
import { signOut } from 'firebase/auth';




const Navbar = () => {
  const router = useRouter();



    const logOutUser=()=>{
        signOut(auth).then(() => {
       toast.success('Successfully Logout....');
       router.push("/");
     })
     .catch((error) => {
       toast.error(error.message);
     })};
  
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'transparent' }}>

                <Container maxWidth="xl" >
                    <Toolbar disableGutters >
                       
                        <Box >
                           <Image src={logo} alt=''  />

                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <Segment />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                <MenuItem > <Link href="/" ><Typography align="center" component="a"sx={{ padding:'1rem', borderRadius:'5px' , '&:hover': { backgroundColor: 'white' , color:'orangered'} }}>  Home </Typography></Link> </MenuItem>
                                <MenuItem > <Link href="#about" ><Typography align="center" component="a"sx={{ padding:'1rem', borderRadius:'5px' , '&:hover': { backgroundColor: 'white' , color:'orangered'} }}>  About </Typography></Link> </MenuItem>
                                <MenuItem > <Link href="#contact" ><Typography align="center" component="a"sx={{ padding:'1rem', borderRadius:'5px' , '&:hover': { backgroundColor: 'white' , color:'orangered'} }}>  Contact </Typography></Link> </MenuItem>
                                <MenuItem > <Link href="./Event" ><Typography align="center" component="a"sx={{ padding:'1rem', borderRadius:'5px' , '&:hover': { backgroundColor: 'white' , color:'orangered'} }}>  Event </Typography></Link> </MenuItem>

                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems:'center' }}>
                            
                         <Link href="/" ><Typography align="center" component="a"sx={{ padding:'1rem', borderRadius:'5px' , '&:hover': { backgroundColor: 'white' , color:'orangered'} }}>  Home </Typography></Link>
                         <Link href="#about" ><Typography align="center" component="a"sx={{ padding:'1rem', borderRadius:'5px' , '&:hover': { backgroundColor: 'white' , color:'orangered'} }}>  About </Typography></Link>
                         <Link href="./Events" ><Typography align="center" component="a"sx={{ padding:'1rem', borderRadius:'5px' , '&:hover': { backgroundColor: 'white' , color:'orangered'} }}>  Event </Typography></Link>
                         <Link href="#contact" ><Typography align="center" component="a"sx={{ padding:'1rem', borderRadius:'5px' , '&:hover': { backgroundColor: 'white' , color:'orangered'} }}>  Contact Us </Typography></Link>

                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems:'center' ,justifyContent:'end' }}>
                            
                            <Link href="../LoginPage" ><Typography align="center" component="a"sx={{ padding:'1rem', borderRadius:'5px' , '&:hover': { backgroundColor: 'white' , color:'orangered'} }}>  Login </Typography></Link>
                            <Link href="../SignUp" ><Typography align="center" component="a"sx={{ padding:'1rem', borderRadius:'5px' , '&:hover': { backgroundColor: 'white' , color:'orangered'} }}>  Sign Up </Typography></Link>
                            <Button onClick={logOutUser} variant='contained' color='error'>Logout</Button>
   
                           </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Navbar
