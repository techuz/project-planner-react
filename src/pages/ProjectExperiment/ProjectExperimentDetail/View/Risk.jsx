import { Box, Button, Collapse } from '@mui/material';
import { useState } from 'react';
import RisksTable from '../../../../components/Table/ProjectExperiment/Risks';
import AddIcon from '@mui/icons-material/Add';
import CreateRisk from '../../../../components/Form/ProjectExperiment/CreateRisk';

export default function Risk(props) {
  const { data } = props;
  const [openForm, setOpenForm] = useState(false);

  return (
    <Box sx={{ margin: 3 }}>
      <Box sx={{ float: 'right', paddingBottom: 2 }} color="primary" px={2}>
        {!openForm && (
          <Button
            onClick={() => setOpenForm(!openForm)}
            variant="contained"
            startIcon={<AddIcon />}
            color="primary">
            add new risk
          </Button>
        )}
        <Collapse in={openForm} timeout="auto" unmountOnExit>
          <CreateRisk closeForm={() => setOpenForm(false)} />
        </Collapse>
      </Box>
      <RisksTable rows={data.risks} shouldOpenEditForm={() => setOpenForm(true)} />
    </Box>
  );
}
