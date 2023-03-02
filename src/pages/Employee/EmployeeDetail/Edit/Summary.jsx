import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  FormControl,
  FormControlLabel,
  Switch,
  Paper,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

import { useNavigate } from 'react-router-dom';

export default function Summary(props) {
  const { data } = props;
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [isActive, setActive] = useState(false);

  const positions = [
    {
      name: 'sr.developer',
      value: 'sr.developer',
    },
    {
      name: 'jr.developer',
      value: 'jr.developer',
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted');
  };
  useEffect(() => {
    setName(data.employee_name[0].name);
    setPosition(data.position);
    setActive(data.availability === 'available' ? true : false);
  }, [data]);

  return (
    <Paper sx={{ padding: 3 }} elevation={4}>
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
