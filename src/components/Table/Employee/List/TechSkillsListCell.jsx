import { Box, Popover, Card, CardHeader, Avatar } from '@mui/material';

import { useState } from 'react';

const TechSkillsListCell = (props) => {
  const { techSkills } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredUser, setHoveredUser] = useState(null);
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
    >
      {techSkills.map((skill, index) => (
        <div key={index}>
          <Avatar
            onMouseEnter={(event) => {
              setAnchorEl(event.currentTarget);
              setHoveredUser(skill);
            }}
            onMouseLeave={() => setAnchorEl(null)}
            src={skill.image}
            alt="name"
            size="xs"
            sx={{
              border: '2px solid #FFF',
              cursor: 'pointer',
              position: 'relative',
              objectFit: 'contain',

              '&:hover, &:focus': {
                zIndex: '10',
              },
            }}
          />
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
              <CardHeader
                avatar={
                  <Avatar src={hoveredUser?.image} alt="name" size="xs" />
                }
                title={hoveredUser?.skill_name}
              />
            </Card>
          </Popover>
        </div>
      ))}
    </Box>
  );
};

export default TechSkillsListCell;
