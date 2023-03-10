import { Box, ButtonGroup, Button } from '@mui/material';

const ActionTableCell = (props) => {
  const { shouldEdit } = props;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={shouldEdit}>Edit</Button>
      </ButtonGroup>
    </Box>
  );
};

export default ActionTableCell;
