import { Box, ButtonGroup, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ActionTableCell = (props) => {
  const { row } = props;
  const navigate = useNavigate();

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button
          onClick={() =>
            navigate('/employee-detail', {
              state: { row, permissions: 'Edit' },
            })
          }
        >
          Edit
        </Button>
        {/* <Button>View</Button> */}
      </ButtonGroup>
    </Box>
  );
};

export default ActionTableCell;
