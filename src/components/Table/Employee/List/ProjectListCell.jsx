import { Box, Popover, Card, Chip, ListItem, ListItemText } from '@mui/material';

import { useState } from 'react';

const ProjectListCell = (props) => {
  const { projects, totalHours } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Chip
        onMouseEnter={(event) => {
          setAnchorEl(event.currentTarget);
        }}
        onMouseLeave={() => setAnchorEl(null)}
        label={totalHours}
        color={'success'}
      />
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none'
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}>
        <Card sx={{ minWidth: 275 }}>
          {projects.map((project, index) => (
            <div key={index}>
              <ListItem>
                <ListItemText primary={project.project_name} />
                <ListItemText primary={project.hours} />
              </ListItem>
            </div>
          ))}
        </Card>
      </Popover>
    </Box>
  );
};

export default ProjectListCell;
