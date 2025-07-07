import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const DashboardPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Typography variant="body1">
          Welcome to your dashboard. 
        </Typography>
      </Paper>
    </Box>
  );
};

export default DashboardPage;