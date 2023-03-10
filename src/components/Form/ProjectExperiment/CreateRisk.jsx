import { useState } from 'react';
import { Box, Button, TextField, MenuItem, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

export default function CreateRisk(props) {
  const { closeForm } = props;
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const riskStatuses = [
    {
      name: 'Pending',
      value: 'Pending'
    },
    {
      name: 'Resolved',
      value: 'Resolved'
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
                label="Title"
                variant="filled"
                // fullWidth
                margin="normal"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                id="filled-select-currency"
                select
                label="Status"
                value={status}
                variant="filled"
                fullWidth
                onChange={(e) => setStatus(e.target.value)}>
                {riskStatuses.map((option) => (
                  <MenuItem key={option.name} value={option.value}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography ml={1}>{option?.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
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
