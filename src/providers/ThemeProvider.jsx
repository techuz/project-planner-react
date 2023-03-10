import React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

export const defaultTheme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          background: 'red'
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          background: 'transparent !important'
        }
      }
    },
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          minHeight: 'initial !important'
        }
      }
    }
  }
});

const Provider = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={defaultTheme} {...props}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
