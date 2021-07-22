import React from 'react'
import Grid from '@material-ui/core/Grid';

const year = new Date().getFullYear()
const Footer = () => {
    return (
        <footer>
           <Grid
         container
         direction="row"
         justifyContent="center"
         alignItems="center"
> 
       <Grid item className="my-10">

           <p>Copyright {year} &copy; Rayan Ramirez. All Rights Reserved.</p> 
    </Grid> 
    </Grid> 
        </footer>
    )
}

export default Footer
