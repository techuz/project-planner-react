import React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import ViewSummary from './View/Summary';
import { useLocation } from 'react-router-dom';

export default function ContentPlanDetail() {
  const { state } = useLocation();
  const { row } = state;

  return (
    <Paper elevation={4}>
      <Box sx={{ width: '100%' }}>
        <ViewSummary data={row} />
      </Box>
    </Paper>
  );
}
