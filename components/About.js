import React from 'react'
import {Typography,Grid,Box}from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GrGraphQl } from "react-icons/gr";
import Title from './Title';
import { FaAws } from "react-icons/fa";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:'11rem',
    },
   
    control: {
      padding: theme.spacing(2),
    },
  }));
const About = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <Grid   
        container
        direction="row"
        justify="center"
        alignItems="center" spacing={2}>
             <Grid item xs={12}>
               <Title title="About Me"/>   
             </Grid>
        <Grid item xs={12} lg={8} md={10} sm={10}>
       
          <Typography variant="h5" gutterBottom>
          <Box mt={5}>
          I'm currently a Release Engineer at Integratouch building/deployings services  for Siriusxm with some awesome people. 
          I love learning new technologies that is what makes this profession for me so fullfilling .For example, I have been learning Graphql <GrGraphQl/>, and I am working to get my <FaAws/> solution architect certification.
        </Box> 
        </Typography>
        </Grid>
     </Grid>
     </div>
    )}

export default React.memo(About)
