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
const trackExpense ={
   name:'Track Expense',
   desc:'...dndnggngdngndgnijeiit',
   techs:["AWS",'Reactjs','Nextjs','Nodejs','Material-UI'],
   github:'https://github.com/rayan147',
   demo:'https://github.com/rayan147'
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
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} >
              <ProjectCard  {...trackExpense}/>
              </Paper>
            </Grid>
          ))}
        </Grid>
    </Grid>
    </Grid>
  );
}
export default React.memo(Project)