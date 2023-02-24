import React from 'react';
import {
    createTheme,
    ThemeProvider,
    CssBaseline,
  } from "@mui/material";

  export const defaultTheme = createTheme({
    // components: {
    //     MuiButton: {
    //         styleOverrides: {
                
    //         }
    //     }
    // }
  });

const Provider = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={defaultTheme} {...props}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}

export default Provider;