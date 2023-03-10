import {
  Box,
  Avatar,
  Card,
  Popover,
  CardContent,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const StatusTableCell = (props) => {
  const { statuses } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredUser, setHoveredUser] = useState(null);
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
    >
      {statuses.map((status, index) => (
        <Avatar
          key={index}
          sx={{
            ml: 1,
            width: 30,
            height: 30,
            backgroundColor: status.flag ? 'red' : 'green',
            fontSize: '14px',
          }}
          onMouseEnter={(event) => {
            setAnchorEl(event.currentTarget);
            setHoveredUser(status);
          }}
          onMouseLeave={() => setAnchorEl(null)}
        >
          {status.initial}
        </Avatar>
      ))}
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
          <CardContent>
            <Typography
              variant="button"
              fontWeight="medium"
              ml={1}
              lineHeight={1}
            >
              {hoveredUser?.name}
            </Typography>
          </CardContent>
        </Card>
      </Popover>
    </Box>
  );
};

export default StatusTableCell;
