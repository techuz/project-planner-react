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
  Avatar
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import team1 from '../../../assets/images/team-1.jpg';
import team2 from '../../../assets/images/team-2.jpg';
import team3 from '../../../assets/images/team-3.jpg';
import team4 from '../../../assets/images/team-4.jpg';
import team5 from '../../../assets/images/team-5.jpg';

export default function CreateExperimentalProject(props) {
  const { closeForm } = props;
  const [name, setName] = useState('');
  const [isActive, setActive] = useState(false);
  const [projectLead, setProjectLead] = useState('');
  const [date, setDate] = useState('');
  const [projectsType, setProjectsType] = useState('');

  const projectLeads = [
    {
      name: 'Ryan Tompson',
      value: 'Ryan Tompson',
      image: team1
    },
    {
      name: 'Romina Hadid',
      value: 'Romina Hadid',
      image: team2
    },
    {
      name: 'Alexander Smith',
      value: 'Alexander Smith',
      image: team3
    },
    {
      name: 'Jessica Doe',
      value: 'Jessica Doe',
      image: team4
    },
    {
      name: 'Bruce Banner',
      value: 'Bruce Banner',
      image: team5
    }
  ];
  const projectType = [
    {
      name: 'FIX',
      value: 'FIX'
    },
    {
      name: 'TM',
      value: 'TM'
    }
  ];

  const [members, setMembers] = useState([]);

  const handleMemberChange = (event) => {
    const {
      target: { value }
    } = event;
    setMembers(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

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
                onChange={(e) => setProjectLead(e.target.value)}>
                {projectLeads.map((option) => (
                  <MenuItem key={option.name} value={option.value}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={option?.image} alt="name" sx={{ width: 20, height: 20 }} />
                      <Typography ml={1}>{option?.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
              <FormControl sx={{ m: 1 }}>
                <InputLabel id="demo-multiple-chip-label">Project members</InputLabel>
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
                  )}>
                  {projectLeads.map((option) => (
                    <MenuItem key={option.name} value={option.name}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={option?.image} alt="name" sx={{ width: 20, height: 20 }} />
                        <Typography ml={1}>{option?.name}</Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                id="date"
                label="Project Deadline"
                type="date"
                variant="filled"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="filled-select-currency"
                select
                label="Project Type"
                value={projectsType}
                variant="filled"
                fullWidth
                onChange={(e) => setProjectsType(e.target.value)}>
                {projectType.map((option) => (
                  <MenuItem key={option.name} value={option.value}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography ml={1}>{option?.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
              <FormControl sx={{ m: 2 }}>
                <FormControlLabel
                  control={<Switch checked={isActive} />}
                  onChange={(e) => setActive(e.target.checked)}
                  label={isActive ? 'Active' : 'Inactive'}
                />
              </FormControl>
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
