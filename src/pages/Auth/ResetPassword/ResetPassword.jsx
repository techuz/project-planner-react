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
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const resetPasswordValidationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required('New password is required')
      .min(6, 'Password must be longer than 6 characters')
      .max(99, 'Password must be shorter than 100 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Password do not match')
      .required('Confirm password is required')
  });

  const rPFormik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: (values) => {
      resetPassword(values);
      navigate('/');
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
          Reset password
        </Typography>
        <Box component="form" onSubmit={rPFormik.handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="newPassword"
            label="Enter new password"
            type="password"
            id="enter-new-password"
            autoComplete="current-password"
            value={rPFormik.values.newPassword}
            onChange={rPFormik.handleChange}
            error={rPFormik.touched.newPassword && Boolean(rPFormik.errors.newPassword)}
            helperText={rPFormik.touched.newPassword && rPFormik.errors.newPassword}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm new password"
            type="password"
            id="confirm-new-password"
            autoComplete="current-password"
            value={rPFormik.values.confirmPassword}
            onChange={rPFormik.handleChange}
            error={rPFormik.touched.confirmPassword && Boolean(rPFormik.errors.confirmPassword)}
            helperText={rPFormik.touched.confirmPassword && rPFormik.errors.confirmPassword}
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
