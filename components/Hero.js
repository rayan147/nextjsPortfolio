import React from 'react'
import {Typography,Grid,Box}from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FcCommandLine } from "react-icons/fc";
import { FcLinux } from "react-icons/fc";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:'11rem',
  },

}));
const Hero = ()=>{
  const classes = useStyles();
    return(
      <div className={classes.root}>
      <Grid   
      container
      direction="row"
      justify="center"
      alignItems="center" spacing={2}>
      <Grid item xs={11} lg={5} md={10} sm={10}>
      <Typography variant="h2" component="h2" gutterBottom >
        
       Hello There !! <FcLinux/>
      
      </Typography>
        <Typography variant="h4" gutterBottom>
        <Box mt={5}>
      I'm Rayan Ramirez, a self-taught JavaScript developer and Release Engineer. <FcCommandLine size="2rem" /> 
      </Box> 
      </Typography>
      </Grid>
   </Grid>
   </div>
    )
}

export default React.memo(Hero)