import React from 'react'
import {Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import resume from '../../images/resume.png'
import Image from 'next/image'
import Title from '../Title/Title'
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
      justify="center"
      alignItems="center" spacing={2}> 
      <a href="https://resume.rayanr.com/" target="_blank">
      <Grid item  >
         
      <Title title="RESUME"/> 
             </Grid>
             <Grid item >
             <Image
        src={resume}
        alt="Picture of my resume"
      
      /> 
             </Grid>
             </a>
             </Grid>
        </div>
    )
}



export default React.memo(ViewMyResume)
