import React from 'react'
import {Typography,Grid}from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FcCommandLine } from "react-icons/fc";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:'11rem',
  
  },
 
  control: {
    padding: theme.spacing(2),
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
      <Typography variant="h3" component="h3" gutterBottom >
       Hello There !
      </Typography>
        <Typography variant="h4" gutterBottom>
      I'm Rayan Ramirez, a self-taught JavaScript developer &&  Release Engineer. <FcCommandLine size="2rem" /> 
      </Typography>
      </Grid>
   </Grid>
   </div>
    )
}

export default Hero 