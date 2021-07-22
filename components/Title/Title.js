import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    justifyContent:'center',
    marginBottom:'3rem'
  },
});

const  Title =({title}) =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Typography variant="h3" gutterBottom >
      {title}
      </Typography>
     
    </div>
  );
}
export default React.memo(Title)