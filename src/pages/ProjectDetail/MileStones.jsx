import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Collapse,
  FormControl,
  FormControlLabel,
  Switch,
  FormLabel,
} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

export default function Milestones(props) {
  const { data } = props;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isActive, setActive] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted');
  };

  // useEffect(() => {
  //   setName(data.project_name);
  //   setProjectLead(data.project_lead[0].name);
  //   setBudget(data.budget);
  //   const developersName = data.developers.map((item) => item.name);
  //   setMembers([...developersName]);
  //   setDate(data.date);
  //   setActive(data.status === 'active' ? true : false);
  // }, [data]);

  return (
    <Box>
      <Box color="primary" px={1}>
        <Button
          onClick={() => setOpen(!open)}
          variant="outgradientlined"
          startIcon={open ? <CloseIcon /> : <AddIcon />}
          color="primary"
        >
          {open ? 'close' : 'add new milestone'}
        </Button>
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
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
                label="Milestone name"
                variant="filled"
                // fullWidth
                margin="normal"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                id="date"
                label="Start date"
                type="date"
                variant="filled"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="date"
                label="End date"
                type="date"
                variant="filled"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FormControl sx={{ m: 2 }}>
                <FormControlLabel
                  control={<Switch checked={isActive} />}
                  onChange={(e) => setActive(e.target.checked)}
                  label="Status"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl sx={{ m: 2 }}>
                <FormLabel>Checklists</FormLabel>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="Minimum 3 rows"
                  style={{ width: 600 }}
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
      </Collapse>
    </Box>
  );
}
