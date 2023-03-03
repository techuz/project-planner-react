import { useEffect, useState } from 'react';
import { Box, Button, TextField, Collapse, MenuItem, Typography } from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import ProjectAllocationTable from '../../../../components/Table/Employee/Allocation';

export default function ProjectAllocation(props) {
  const { data } = props;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [hours, setHours] = useState('');
  const [projectName, setProjectName] = useState('');
  const [allocatedProjectList, setAllocatedProjectList] = useState([]);

  const projectList = [
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setAllocatedProjectList(data.project_allocated);
  }, [data]);

  const createAllocaton = () => {
    setOpen(!open);
    setProjectName('');
    setHours('');
  };

  const editAllocation = (item) => {
    setOpen(true);
    setProjectName(item.project_name);
    setHours(item.hours);
  };

  return (
    <Box>
      <Box color="primary" px={1}>
        <Button
          onClick={createAllocaton}
          variant="outgradientlined"
          startIcon={open ? <CloseIcon /> : <AddIcon />}
          color="primary">
          {open ? 'close' : 'add new allocation'}
        </Button>
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <form onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off">
            <Box sx={{ display: 'flex' }}>
              <TextField
                id="filled-select-currency"
                select
                label="Projects"
                value={projectName}
                variant="filled"
                onChange={(e) => setProjectName(e.target.value)}>
                {projectList.map((option) => (
                  <MenuItem key={option.name} value={option.value}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography ml={1}>{option?.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Hours"
                variant="filled"
                // fullWidth
                margin="normal"
                value={hours}
                onChange={(event) => setHours(event.target.value)}
              />
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
        <ProjectAllocationTable rows={allocatedProjectList} editAllocation={editAllocation} />
        {/* <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Project allocation list
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
                Project name
              </Typography>
              <Typography
                sx={{
                  width: '20%',
                }}
              >
                Allocated hours
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
            {allocatedProjectList.map((item) => (
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
                  {item.project_name}
                </Typography>
                <Typography
                  sx={{
                    width: '20%',
                  }}
                >
                  {item.hours}
                </Typography>
                <Typography
                  sx={{
                    width: '20%',
                  }}
                >
                  <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={() => editAllocation(item)}>
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
        </List> */}
      </Box>
    </Box>
  );
}
