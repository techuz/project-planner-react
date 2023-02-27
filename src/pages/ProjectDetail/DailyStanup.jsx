import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Collapse,
  FormControl,
  List,
  ListItem,
  Typography,
  Card,
  Chip,
  Divider,
  ButtonGroup,
  ListSubheader,
  InputLabel,
  Select,
  MenuItem,
  FilledInput,
  Avatar,
} from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

import team1 from '../../assets/images/team-1.jpg';
import team2 from '../../assets/images/team-2.jpg';
import team3 from '../../assets/images/team-3.jpg';
import team4 from '../../assets/images/team-4.jpg';
import team5 from '../../assets/images/team-5.jpg';
import { useNavigate } from 'react-router-dom';

export default function DailyStanup(props) {
  const { data } = props;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const attendees = [
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

  const createMilestone = () => {
    setOpen(!open);
    setName('');
    setDate('');
  };

  const editMilestone = (item) => {
    setOpen(true);
    setName(item.standupName);
    setDate(item.date);
    setTime(item.time);
    const developersName = item.developers.map((item) => item.name);
    setMembers([...developersName]);
  };

  const standupLists = [
    {
      standupName: 'Morning scrum',
      date: '2023-01-02',
      time: '10:00',
      developers: [attendees[2], attendees[3], attendees[1]],
    },
    {
      standupName: 'EOD status call',
      date: '2023-01-02',
      time: '07:00',
      developers: [attendees[0], attendees[2], attendees[1], attendees[3]],
    },
  ];

  return (
    <Box>
      <Box color="primary" px={1}>
        <Button
          onClick={createMilestone}
          variant="outgradientlined"
          startIcon={open ? <CloseIcon /> : <AddIcon />}
          color="primary"
        >
          {open ? 'close' : 'add new standup'}
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
                label="Daily standup name"
                variant="filled"
                // fullWidth
                margin="normal"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
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
                id="time"
                label="Time"
                type="time"
                variant="filled"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
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
                  {attendees.map((option) => (
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
      <Box>
        <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Daily standup's list
            </ListSubheader>
          }
        >
          <Card
            sx={{
              width: '100%',
            }}
          >
            <ListItem
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <Typography
                sx={{
                  width: '20%',
                }}
              >
                Stanup name
              </Typography>
              <Typography
                sx={{
                  width: '20%',
                }}
              >
                Date
              </Typography>
              <Typography
                sx={{
                  width: '20%',
                }}
              >
                Time
              </Typography>
              <Typography
                sx={{
                  width: '20%',
                }}
              >
                Developers
              </Typography>
              <Typography
                sx={{
                  width: '20%',
                }}
              >
                Action
              </Typography>
            </ListItem>
          </Card>
          <Divider />
          <Card
            sx={{
              width: '100%',
            }}
          >
            {standupLists.map((item) => (
              <ListItem
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <Typography
                  sx={{
                    width: '20%',
                  }}
                >
                  {item.standupName}
                </Typography>
                <Typography
                  sx={{
                    width: '20%',
                  }}
                >
                  {item.date}
                </Typography>
                <Typography
                  sx={{
                    width: '20%',
                  }}
                >
                  {item.time}
                </Typography>
                <Box
                  sx={{
                    width: '20%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {item.developers.map((dev) => (
                    <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        src={dev.image}
                        alt="name"
                        size="xs"
                        sx={{
                          width: 20,
                          height: 20,
                          border: '2px solid #FFF',
                          cursor: 'pointer',
                          position: 'relative',
                          mr: 1,
                        }}
                      />
                      {dev.name}
                    </Typography>
                  ))}
                </Box>
                <Typography
                  sx={{
                    width: '20%',
                  }}
                >
                  <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={() => editMilestone(item)}>
                      <EditIcon />
                    </Button>
                    <Button>
                      <DeleteIcon />
                    </Button>
                  </ButtonGroup>
                </Typography>
              </ListItem>
            ))}
          </Card>
        </List>
      </Box>
    </Box>
  );
}
