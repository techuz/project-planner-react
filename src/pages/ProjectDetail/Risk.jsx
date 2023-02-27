import { useState } from 'react';
import {
  Box,
  Button,
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
  FormLabel,
} from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

import { useNavigate } from 'react-router-dom';
import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function Risk(props) {
  const { data } = props;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [risk, setRisk] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted');
  };

  const createMilestone = () => {
    setOpen(!open);
    setRisk('');
  };

  const editMilestone = (item) => {
    setOpen(true);
    setRisk(item.risk);
  };

  const riskLists = [
    {
      risk: 'risk 1',
      status: 'pending',
    },
    {
      risk: 'risk 2',
      status: 'resolved',
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
          {open ? 'close' : 'add new risk'}
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
              <FormControl sx={{ m: 2 }}>
                <FormLabel>Risk</FormLabel>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  value={risk}
                  onChange={(e) => setRisk(e.target.value)}
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
              Risk's list
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
                Risk
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
            {riskLists.map((item) => (
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
                  {item.risk}
                </Typography>
                <Typography
                  sx={{
                    width: '20%',
                  }}
                >
                  <Chip
                    label={item.status}
                    color={item.status === 'resolved' ? 'success' : 'warning'}
                  />
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
