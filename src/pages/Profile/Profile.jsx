import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from '@mui/material';
import profileDetail from '../../StaticData/profile.json';
import ChangePassword from './ChangePassword';

const UserProfile = () => {
  const usersDetails = profileDetail;
  const [shouldChangePassword, setShouldChangePassword] = useState(false);
  return (
    <Card>
      {!shouldChangePassword ? (
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '200px',
            }}
          >
            <Avatar
              sx={{
                width: '200px',
                height: '200px',
              }}
              src={usersDetails.profile_url}
              aria-label="user-avatar"
            />
          </Box>
          <Box
            sx={{
              margin: 3,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box mt={3} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex' }}>
                <Typography variant="subtitle1">Full Name</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography variant="subtitle1">Email Address</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography variant="subtitle1">Position</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Link onClick={() => setShouldChangePassword(true)}>
                  Change password
                </Link>
              </Box>
            </Box>
            <Box m={3} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex' }}>
                <Typography variant="subtitle1">
                  {usersDetails.users_name}{' '}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography variant="subtitle1">
                  {usersDetails.email}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography variant="subtitle1">
                  {usersDetails.position}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex' }} xs={12}>
            <Box mt={2}>
              <Button variant="contained" color="primary">
                Update Profile
              </Button>
            </Box>
          </Box>
        </CardContent>
      ) : (
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ChangePassword
            cancleChangePassword={() => setShouldChangePassword(false)}
          />
        </CardContent>
      )}
    </Card>
  );
};

export default UserProfile;
