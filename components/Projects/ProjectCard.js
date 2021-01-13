import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Box,Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {GoMarkGithub } from "react-icons/go";

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
  },
  media: {
    height: 140,
  },
 
});

const  ProjectCard =(props) =>{
  const classes = useStyles();
 

const {name,demo,github,techs,desc,img} = props
const techSkill =(tech,index)=><Box  p={.5} mx={1}key={index}>{tech}</Box>

  



  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title={name}
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
      <Box display="flex" flexWrap="wrap" >
      {techs.map(techSkill)}
      </Box>
      <CardActions>
        
        <a href={github} target='blank'>
        <Button size="small" color="primary">
          <GoMarkGithub size="1.6rem"/>
        </Button>
        </a>
        <a href={demo} target='blank'>
        <Button size="small" color="primary">
          Demo
        </Button>
        </a>  
       
      </CardActions>
   
     
   
    </Card>
  );
}
export default React.memo(ProjectCard)