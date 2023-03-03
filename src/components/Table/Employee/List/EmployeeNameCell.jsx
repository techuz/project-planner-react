import { Box, Avatar, Typography } from '@mui/material';

const EmployeeNameCell = (props) => {
  const { employee } = props;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          src={employee[0].image}
          alt="name"
          size="xs"
          sx={{
            border: '2px solid #FFF',
            cursor: 'pointer',
            position: 'relative',
            mr: 1
          }}
        />
        {employee[0].name}
      </Typography>
    </Box>
  );
};

export default EmployeeNameCell;
