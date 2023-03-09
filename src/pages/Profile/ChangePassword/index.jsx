import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAuth } from '../../../providers/AuthProvider';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function ChangePassword(props) {
  const { cancleChangePassword } = props;
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const ChangePasswordValidationSchema = Yup.object().shape({
    currentPassword: Yup.string().required('Current password is required'),
    newPassword: Yup.string().required('New password is required'),
    confirmPassword: Yup.string().required('Confirm password is required')
  });

  const cPFormik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: ChangePasswordValidationSchema,
    onSubmit: (values) => {
      navigate('/');
      resetPassword(values);
    }
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Typography component="h1" variant="h5">
          Change password
        </Typography>
        <Box component="form" onSubmit={cPFormik.handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="currentPassword"
            label="Enter current password"
            type="password"
            id="enter-current-password"
            autoComplete="current-password"
            value={cPFormik.values.currentPassword}
            onChange={cPFormik.handleChange}
            error={cPFormik.touched.currentPassword && Boolean(cPFormik.errors.currentPassword)}
            helperText={cPFormik.touched.currentPassword && cPFormik.errors.currentPassword}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="newPassword"
            label="Enter new password"
            type="password"
            id="enter-new-password"
            autoComplete="current-password"
            value={cPFormik.values.newPassword}
            onChange={cPFormik.handleChange}
            error={cPFormik.touched.newPassword && Boolean(cPFormik.errors.newPassword)}
            helperText={cPFormik.touched.newPassword && cPFormik.errors.newPassword}
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
            value={cPFormik.values.confirmPassword}
            onChange={cPFormik.handleChange}
            error={cPFormik.touched.confirmPassword && Boolean(cPFormik.errors.confirmPassword)}
            helperText={cPFormik.touched.confirmPassword && cPFormik.errors.confirmPassword}
          />
          <Box display="flex">
            <Button type="submit" fullWidth variant="contained" sx={{ m: 3 }}>
              Submit
            </Button>
            <Button
              onClick={cancleChangePassword}
              fullWidth
              variant=""
              sx={{ bgcolor: 'rgba(0, 0, 0, 0.04)', m: 3 }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
