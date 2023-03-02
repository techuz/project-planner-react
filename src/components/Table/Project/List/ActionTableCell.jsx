import { Box, ButtonGroup, Button } from '@mui/material';

const ActionTableCell = () => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>Edit</Button>
      </ButtonGroup>
    </Box>
  );
};

export default ActionTableCell;