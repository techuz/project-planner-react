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
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none !important',
          border: '1px solid rgba(224, 224, 224, 1)'
          // borderRadius: 8
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
