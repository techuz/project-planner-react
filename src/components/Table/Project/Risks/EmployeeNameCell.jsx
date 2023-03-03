import { Box, Avatar, Typography } from '@mui/material';

const EmployeeNameCell = (props) => {
  const { employee } = props;
  if (employee && Object.keys(employee).length === 0) {
    return;
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          src={employee.image}
          alt="name"
          size="xs"
          sx={{
            border: '2px solid #FFF',
            cursor: 'pointer',
            position: 'relative',
            mr: 1
          }}
        />
        {employee.name}
      </Typography>
    </Box>
  );
};

export default EmployeeNameCell;
