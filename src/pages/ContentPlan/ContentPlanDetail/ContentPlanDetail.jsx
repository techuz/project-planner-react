import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Paper, Typography } from '@mui/material';
import ViewSummary from './View/Summary';
import { useParams } from 'react-router-dom';
import contentPlanList from '../../../StaticData/contentPlanList.json';

export default function ContentPlanDetail() {
  const params = useParams();
  const { id } = params;
  const [row, setRow] = useState({});

  useEffect(() => {
    const details = contentPlanList.filter((item) => item.id === id);
    if (details.length > 0) setRow(details[0]);
  }, [id]);

  return (
    <Paper elevation={4}>
      {Object.keys(row).length > 0 ? (
        <Box sx={{ width: '100%' }}>
          <ViewSummary data={row} />
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            minHeight: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography>No record found!</Typography>
        </Box>
      )}
    </Paper>
  );
}
