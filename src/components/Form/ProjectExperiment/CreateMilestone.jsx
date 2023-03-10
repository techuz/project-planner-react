import { useState } from 'react';
import { Box, Button, TextField, MenuItem, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

export default function CreateMilestone(props) {
  const { closeForm } = props;
  const [name, setName] = useState('');
  const [checklists, setCheckLists] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('');

  const milestoneStatuses = [
    {
      name: 'Pending',
      value: 'Pending'
    },
    {
      name: 'Inprogress',
      value: 'Inprogress'
    },
    {
      name: 'Completed',
      value: 'Completed'
    }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        padding: 3,
        border: '2px solid rgba(224, 224, 224, 1)',
        borderRadius: 2
      }}>
      <Box>
        <form onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: 500 }
            }}
            noValidate
            autoComplete="off">
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                label="Milestone name"
                variant="filled"
                // fullWidth
                margin="normal"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                id="start-date"
                label="Start date"
                type="date"
                variant="filled"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="end-date"
                label="End date"
                type="date"
                variant="filled"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="filled-select-currency"
                select
                label="Status"
                value={status}
                variant="filled"
                fullWidth
                onChange={(e) => setStatus(e.target.value)}>
                {milestoneStatuses.map((option) => (
                  <MenuItem key={option.name} value={option.value}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography ml={1}>{option?.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                sx={{ width: '90%' }}
                id="outlined-multiline-flexible"
                placeholder="Add checklists..."
                value={checklists}
                onChange={(event) => setCheckLists(event.target.value)}
                multiline
                maxRows={4}
              />
            </Box>
            <Button variant="outlined" startIcon={<SaveIcon />}>
              Save
            </Button>
            &nbsp;
            <Button variant="outlined" onClick={closeForm}>
              Close
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
