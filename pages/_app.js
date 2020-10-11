import React,{useEffect,useState}from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { Switch, Box,FormControlLabel } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { BsMoon } from "react-icons/bs";
import  useToggle from '../hooks/useToggle'
import '../styles/globals.css'
export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [darkMode, setDarkMode] =useToggle()
  
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const theme = createMuiTheme({
    palette: {
     type: darkMode ? 'dark' :'light'
    },
  });
  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Box display="flex" flexDirection="row-reverse" mt={3} p={1}> 
    <Box >
    <FormControlLabel
          value="end"
  control={<Switch checked={darkMode} onChange={setDarkMode} /> }
          label={<BsMoon size="1rem"/>}
          labelPlacement="end"
        />
    
    </Box>
    </Box>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};