import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Avatar,
  Typography,
  Chip,
  Select,
  FilledInput,
  FormControl,
  InputLabel,
  FormControlLabel,
  Switch,
  Paper,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

import team1 from '../../../assets/images/team-1.jpg';
import team2 from '../../../assets/images/team-2.jpg';
import team3 from '../../../assets/images/team-3.jpg';
import team4 from '../../../assets/images/team-4.jpg';
import team5 from '../../../assets/images/team-5.jpg';
import { useNavigate } from 'react-router-dom';

export default function CreateProject() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [projectLead, setProjectLead] = useState('');
  const [budget, setBudget] = useState('');
  const [date, setDate] = useState('');
  const [isActive, setActive] = useState(false);

  const projectLeads = [
    {
      name: 'Ryan Tompson',
      value: 'Ryan Tompson',
      image: team1,
    },
    {
      name: 'Romina Hadid',
      value: 'Romina Hadid',
      image: team2,
    },
    {
      name: 'Alexander Smith',
      value: 'Alexander Smith',
      image: team3,
    },
    {
      name: 'Jessica Doe',
      value: 'Jessica Doe',
      image: team4,
    },
    {
      name: 'Bruce Banner',
      value: 'Bruce Banner',
      image: team5,
    },
  ];

  const [members, setMembers] = useState([]);

  const handleMemberChange = (event) => {
    const {
      target: { value },
    } = event;
    setMembers(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted');
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Box>
        <form onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <Box sx={{ display: 'flex' }}>
              <TextField
                label="Project name"
                variant="filled"
                // fullWidth
                margin="normal"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                id="filled-select-currency"
                select
                label="Project lead"
                value={projectLead}
                variant="filled"
                onChange={(e) => setProjectLead(e.target.value)}
              >
                {projectLeads.map((option) => (
                  <MenuItem key={option.name} value={option.value}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        src={option?.image}
                        alt="name"
                        sx={{ width: 20, height: 20 }}
                      />
                      <Typography ml={1}>{option?.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">
                  Developers
                </InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  input={<FilledInput />}
                  value={members}
                  onChange={handleMemberChange}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {projectLeads.map((option) => (
                    <MenuItem key={option.name} value={option.name}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          src={option?.image}
                          alt="name"
                          sx={{ width: 20, height: 20 }}
                        />
                        <Typography ml={1}>{option?.name}</Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <TextField
                id="date"
                label="Date"
                type="date"
                variant="filled"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Budget"
                variant="filled"
                // fullWidth
                margin="normal"
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
              />
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
