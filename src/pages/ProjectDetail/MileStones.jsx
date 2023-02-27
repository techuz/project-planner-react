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
  List,
  ListItem,
  Typography,
  Card,
  Chip,
  Divider,
  ButtonGroup,
  ListSubheader,
} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
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
  const [checkLists, setCheckLists] = useState('');
  const [milestones, setMilestones] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted');
  };

  useEffect(() => {
    setMilestones(data.milestone);
  }, [data]);

  const createMilestone = () => {
    setOpen(!open);
    setName('');
    setStartDate('');
    setEndDate('');
    setActive(false);
    setCheckLists('');
  };

  const editMilestone = (item) => {
    setOpen(true);
    setName(item.name);
    setStartDate(item.startDate);
    setEndDate(item.endDate);
    setActive(item.status === 'completed' ? true : false);
    setCheckLists(item.checklist);
  };

  return (
    <Box>
      <Box color="primary" px={1}>
        <Button
          onClick={createMilestone}
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
                  value={checkLists}
                  onChange={(e) => setCheckLists(e.target.value)}
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
      <Box>
        <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Milestones list
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
                Name
              </Typography>
              <Typography
                sx={{
                  width: '20%',
                }}
              >
                Start date
              </Typography>
              <Typography
                sx={{
                  width: '20%',
                }}
              >
                End date
              </Typography>
              <Typography
                sx={{
                  width: '20%',
                }}
              >
                Status
              </Typography>
              <Typography
                sx={{
                  width: '20%',
                }}
              >
                Checklists
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
            {milestones.map((item) => (
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
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    width: '20%',
                  }}
                >
                  {item.startDate}
                </Typography>
                <Typography
                  sx={{
                    width: '20%',
                  }}
                >
                  {item.endDate}
                </Typography>
                <Typography
                  sx={{
                    width: '20%',
                  }}
                >
                  <Chip
                    label={item.status}
                    color={item.status === 'completed' ? 'success' : 'warning'}
                  />
                </Typography>
                <Typography
                  sx={{
                    width: '20%',
                  }}
                >
                  {item.checklist}
                </Typography>
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