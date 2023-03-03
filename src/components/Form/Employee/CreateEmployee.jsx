import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Chip,
  Select,
  FilledInput,
  FormControl,
  InputLabel,
  FormControlLabel,
  Switch,
  Paper
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

import { useNavigate } from 'react-router-dom';

export default function CreateEmployee() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [isActive, setActive] = useState(false);

  const projectAllocated = [
    {
      name: 'Frozen yoghurt',
      value: 'Frozen yoghurt'
    },
    {
      name: 'Temple run',
      value: 'Temple run'
    },
    {
      name: 'Fury ukraine',
      value: 'Fury ukraine'
    }
  ];

  const positions = [
    {
      name: 'Sr. developer',
      value: 'Sr. developer'
    },
    {
      name: 'Jr. developer',
      value: 'Jr. developer'
    }
  ];

  const [projects, setProjects] = useState([]);

  const handleMemberChange = (event) => {
    const {
      target: { value }
    } = event;
    setProjects(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Box>
        <form onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
          >
            <Box sx={{ display: 'flex' }}>
              <TextField
                label="Employee name"
                variant="filled"
                // fullWidth
                margin="normal"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                id="filled-select-currency"
                select
                label="Position"
                value={position}
                variant="filled"
                onChange={(e) => setPosition(e.target.value)}
              >
                {positions.map((option) => (
                  <MenuItem key={option.name} value={option.value}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography ml={1}>{option?.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Project allocated</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  input={<FilledInput />}
                  value={projects}
                  onChange={handleMemberChange}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {projectAllocated.map((option) => (
                    <MenuItem key={option.name} value={option.name}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography ml={1}>{option?.name}</Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <FormControl sx={{ m: 2 }}>
                <FormControlLabel
                  control={<Switch checked={isActive} />}
                  onChange={(e) => setActive(e.target.checked)}
                  label="Status"
                />
              </FormControl>
            </Box>
            <Button variant="outlined" startIcon={<SaveIcon />}>
              Save
            </Button>
            &nbsp;
            <Button variant="outlined" onClick={() => navigate(-1)}>
              back
            </Button>
          </Box>
        </form>
      </Box>
    </Paper>
  );
}
