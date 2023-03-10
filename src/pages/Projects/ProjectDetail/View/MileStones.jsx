import { Box, Button, Collapse, FormLabel } from '@mui/material';
import { useState } from 'react';
import MilestonesTable from '../../../../components/Table/Project/Milestones';
import CreateMilestone from '../../../../components/Form/Project/CreateMilestone';
import AddIcon from '@mui/icons-material/Add';

export default function Milestones(props) {
  const { data } = props;
  const [openForm, setOpenForm] = useState(false);

  return (
    <Box sx={{ margin: 3 }}>
      <FormLabel>Milestones</FormLabel>
      <Box sx={{ float: 'right', paddingBottom: 2 }} color="primary" px={2}>
        {!openForm && (
          <Button
            onClick={() => setOpenForm(!openForm)}
            variant="contained"
            startIcon={<AddIcon />}
            color="primary">
            add new milestone
          </Button>
        )}
        <Collapse in={openForm} timeout="auto" unmountOnExit>
          <CreateMilestone closeForm={() => setOpenForm(false)} />
        </Collapse>
      </Box>
      <MilestonesTable rows={data.milestone} shouldOpenEditForm={() => setOpenForm(true)} />
    </Box>
  );
}
