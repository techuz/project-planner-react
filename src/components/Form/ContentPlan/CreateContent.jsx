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

export default function CreateContent(props) {
  const { closeForm } = props;
  const [documentLink, setDocumentLink] = useState('');
  const [topic, setTopic] = useState('');
  const [category, setCategory] = useState('');
  const [isActive, setActive] = useState(false);
  const [date, setDate] = useState('');
  const [allocatedBy, setAllocatedBy] = useState('');

  const developers = [
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
  const categories = [
    {
      name: 'Category1',
      value: 'Category1'
    },
    {
      name: 'Category2',
      value: 'Category2'
    },
    {
      name: 'Category3',
      value: 'Category3'
    }
  ];

  const [users, setUsers] = useState([]);

  const handleMemberChange = (event) => {
    const {
      target: { value }
    } = event;
    setUsers(
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
                label="Document link"
                variant="filled"
                // fullWidth
                margin="normal"
                value={documentLink}
                onChange={(event) => setDocumentLink(event.target.value)}
              />
              <TextField
                label="Topic"
                variant="filled"
                // fullWidth
                margin="normal"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
              />
              <TextField
                id="filled-select-currency"
                select
                label="Category"
                value={category}
                variant="filled"
                fullWidth
                onChange={(e) => setCategory(e.target.value)}>
                {categories.map((option) => (
                  <MenuItem key={option.name} value={option.value}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography ml={1}>{option?.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="date"
                label="Deadline"
                type="date"
                variant="filled"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <FormControl sx={{ m: 1 }}>
                <InputLabel id="demo-multiple-chip-label">Users</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  input={<FilledInput />}
                  value={users}
                  onChange={handleMemberChange}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}>
                  {developers.map((option) => (
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
                id="filled-select-currency"
                select
                label="Allocated by"
                value={allocatedBy}
                variant="filled"
                onChange={(e) => setAllocatedBy(e.target.value)}>
                {developers.map((option) => (
                  <MenuItem key={option.name} value={option.value}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={option?.image} alt="name" sx={{ width: 20, height: 20 }} />
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
