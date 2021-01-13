import React from 'react'
import {Typography,Box} from '@material-ui/core';
const WorkingOnProject = () => {
    return (
        <Box display="flex" justifyContent="center">
            <Box mt={12}>
            <Typography variant="h6" gutterBottom>Rental webbapp</Typography>
            <Typography variant="body1" gutterBottom>
          I am currently working on a rental webapp for the New Jersey area.
          My goal with this project is for people that can't afford to pay rental fees and realtor fees as well to look for a place there .
          I am using React for the fronted and amazon amplify for auth,s3,dynamodb,lambda and appsync for the apis.
      </Typography>
            </Box>
        </Box>
    )
}

export default WorkingOnProject
