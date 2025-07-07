import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const SettingsPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Set Customer Limit
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Typography variant="body1">
          Define Customer Limit
        </Typography>
      </Paper>
    </Box>
  );
};

export default SettingsPage;