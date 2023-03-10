import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAuth } from '../../../providers/AuthProvider';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from '@mui/material';

export default function ForgotPassword() {
  const { forgotPassword } = useAuth();

  const forgotPasswordValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required')
  });

  const fPFormik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: (values) => {
      forgotPassword(values);
    }
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot password
        </Typography>
        <Box component="form" onSubmit={fPFormik.handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={fPFormik.values.email}
            onChange={fPFormik.handleChange}
            error={fPFormik.touched.email && Boolean(fPFormik.errors.email)}
            helperText={fPFormik.touched.email && fPFormik.errors.email}
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Link href="/">Sign in</Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
