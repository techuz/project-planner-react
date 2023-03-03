import { Box, Popover, Card, CardContent, CardHeader, Avatar, Typography } from '@mui/material';

import { useState } from 'react';

const ProjectUsersTableCell = (props) => {
  const { members } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredUser, setHoveredUser] = useState(null);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      {members.map((member, index) => (
        <div key={index}>
          <Avatar
            onMouseEnter={(event) => {
              setAnchorEl(event.currentTarget);
              setHoveredUser(member);
            }}
            onMouseLeave={() => setAnchorEl(null)}
            src={member.image}
            alt="name"
            size="xs"
            sx={{
              border: '2px solid #FFF',
              cursor: 'pointer',
              position: 'relative',
              ml: -1.25,

              '&:not(:first-of-type)': {
                ml: -1.25
              },

              '&:hover, &:focus': {
                zIndex: '10'
              }
            }}
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
            }}
          >
            <Card sx={{ minWidth: 275 }}>
              <CardHeader
                avatar={<Avatar src={hoveredUser?.image} alt="name" size="xs" />}
                title={hoveredUser?.name}
              />
              {hoveredUser?.hours && (
                <CardContent>
                  <Typography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
                    {hoveredUser?.hours}
                  </Typography>
                </CardContent>
              )}
            </Card>
          </Popover>
        </div>
      ))}
    </Box>
  );
};

export default ProjectUsersTableCell;
