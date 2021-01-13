import React from 'react'
import {Button,Typography,Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { FaArrowRight } from "react-icons/fa";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:'11rem',
      marginBottom:'3rem',
    },
  
  }));
const ViewMyResume = ()=> {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid   
      container
      direction="row"
      justify="center"
      alignItems="center" spacing={2}>
      <Grid item xs={11} lg={5} md={10} sm={10}>
          <a href="https://resume.rayanr.com/" target="_blank">
           <Button >
           <Typography variant="h5" gutterBottom >
           <FaArrowRight/> View My Resume 
      </Typography>
           
             </Button>
             </a>
             </Grid>
             </Grid>
        </div>
    )
}



export default React.memo(ViewMyResume)
