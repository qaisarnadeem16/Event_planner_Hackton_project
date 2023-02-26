import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
    return (
        <Box container>
            <Grid container marginTop={{xs:10, md:20}}  textAlign="center">
                <Grid Item md={3} xs={12} sx={{ color: "white", marginLeft: { md: "10rem"} }}>
                    <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
                </Grid>
                <Grid Item md={3} xs={12} sx={{ color: "white", marginTop:{xs:7, md:0}}}>
                    <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
                </Grid>
                <Grid Item md={3} xs={12} sx={{ color: "white", marginTop:{xs:7, md:0 }}}>
                    <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
                </Grid>


            </Grid>

            <Box display="flex" justifyContent="space-between">
                <Box  sx={{ margin:{md:'10rem 0rem 0 10rem'}}}>
                    <Button sx={{ color: "white" }}>Privacy</Button>
                    <Button sx={{ color: "white" }}>Terms</Button>
                </Box>
                <Box sx={{ margin:{md:'10rem 5rem 0 0rem'}}}  >
                    <Instagram sx={{ color: "white", margin:{md:".2rem"} }}/>
                    <Facebook sx={{ color: "white",margin:{md:".2rem"}  }}/>
                    <Twitter sx={{ color: "white",margin:{md:".2rem"} }}/>
                    <LinkedIn sx={{ color: "white",margin:{md:".2rem"} }}/>

                </Box>
            </Box>
        </Box>
    )
}
export default Footer