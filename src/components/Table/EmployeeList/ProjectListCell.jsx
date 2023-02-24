import {
  Box,
  Popover,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

import { useState } from 'react';

const ProjectListCell = (props) => {
  const { projects } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredUser, setHoveredUser] = useState(null);
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
    >
      <List>
        {projects.map((project, index) => (
          <div key={index}>
            <ListItem
              onMouseEnter={(event) => {
                setAnchorEl(event.currentTarget);
                setHoveredUser(project);
              }}
              onMouseLeave={() => setAnchorEl(null)}
            >
              <ListItemText primary={project.project_name} />
            </ListItem>
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <Card sx={{ minWidth: 275 }}>
                <CardHeader title={hoveredUser?.project_name} />
                {hoveredUser?.hours && (
                  <CardContent>
                    <Typography
                      variant="button"
                      fontWeight="medium"
                      ml={1}
                      lineHeight={1}
                    >
                      {hoveredUser?.hours}
                    </Typography>
                  </CardContent>
                )}
              </Card>
            </Popover>
          </div>
        ))}
      </List>
    </Box>
  );
};

export default ProjectListCell;
