import { Box, ButtonGroup, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ActionTableCell = (props) => {
  const { row, editAllocation } = props;

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={() => editAllocation(row)}>
          <EditIcon />
        </Button>
        <Button>
          <DeleteIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default ActionTableCell;
