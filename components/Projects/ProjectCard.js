import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Box,List,Button, useEventCallback} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {GoMarkGithub } from "react-icons/go";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
 
});

const  ProjectCard =(props) =>{
  const classes = useStyles();
 

const {name,demo,github,techs,desc} = props
const techSkill =(tech,index)=><Box key={index}>{tech}</Box>

  



  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1589394434125-8ae8b2b3d853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {techs.map(techSkill)}
      </CardActions>
      <CardActions>
        
        <a href={github} target='blank'>
        <Button size="small" color="primary">
          <GoMarkGithub size="1.6rem"/>
        </Button>
        </a>
        <a href={demo} target='blank'>
        <Button size="small" color="primary">
          Demon
        </Button>
        </a>  
       
      </CardActions>
   
     
   
    </Card>
  );
}
export default React.memo(ProjectCard)