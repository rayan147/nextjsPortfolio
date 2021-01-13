import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Paper,Box} from '@material-ui/core';
import ProjectCard from './ProjectCard'
import Title from '../Title';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:'10rem',
    marginBottom:'10rem'
  },
  paper: {
    height: 300,
    width: 340,
    margin: 'auto'
  },
  control: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop:'3rem',
    marginBottom:"3rem"
  
  },
}));
const cryptoboard={
   name:"Cryptoboard",
   desc:'Display the top 20 cryptocurrcies by market cap ',
   techs:["Cloudfront","S3","Route53",'Nextjs','Serverless Framework'],
   github:'https://github.com/rayan147/cryptoboard',
   demo:'https://cryptoboard.rayanr.com/',
   img:"https://myprojectspictures147.s3.amazonaws.com/cryptoboard.png"
}
const tasktracker ={
  name:"Task Tracker",
  desc:"his is task tracker to help me organize my tickets and deployment at work feel free to clone and use it. you could drag and drop lists/cards",
  techs:["Reactjs","React Router","S3","Amplify","Redux","Materail-iu","React-icon"],
  github:"https://github.com/rayan147/tasktracker-",
  demo:"https://task.rayanr.com/",
  img:"https://myprojectspictures147.s3.amazonaws.com/tasktracker.png"
}
const  Project = () =>{
  const classes = useStyles();

  
  return (
    <Grid 
    container 
    direction="row"
    justify="center"
    alignItems="center"
    className={classes.root} 
    spacing={2}>
    
      <Grid item xs={12}>
         <Title title="Projects"/>
        <Grid container justify="center" spacing={4}>
         
            <Grid item>
              <Paper className={classes.paper} >
              <ProjectCard  {...cryptoboard}/>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper} >
              <ProjectCard  {...tasktracker}/>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper} >
              {/* <ProjectCard  {...trackExpense}/> */}
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper} >
              {/* <ProjectCard  {...trackExpense}/> */}
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper} >
              {/* <ProjectCard  {...trackExpense}/> */}
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper} >
              {/* <ProjectCard  {...trackExpense}/> */}
              </Paper>
            </Grid>
        
        </Grid>
    </Grid>
    </Grid>
  );
}
export default React.memo(Project)