import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { FaCog } from 'react-icons/fa';

const SplashScreen = () => (
  <div>
    <Typography variant="h5">Loading <FaCog /></Typography>
    <CircularProgress />
  </div>
);

export default SplashScreen;
