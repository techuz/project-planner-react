import React, { useState } from 'react';
import { Box, Button, Collapse } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import ProjectExperimentListTable from '../../../components/Table/ProjectExperiment/List';
import CreateExperimentalProject from '../../../components/Form/ProjectExperiment/CreateExperimentalProject';

const ProjectExperimentList = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <Box sx={{ float: 'right', paddingBottom: 2 }} color="primary" px={2}>
        {!openForm && (
          <Button
            onClick={() => setOpenForm(!openForm)}
            variant="contained"
            startIcon={<AddIcon />}
            color="primary">
            add new project
          </Button>
        )}
        <Collapse in={openForm} timeout="auto" unmountOnExit>
          <CreateExperimentalProject closeForm={() => setOpenForm(false)} />
        </Collapse>
      </Box>
      <ProjectExperimentListTable />
    </>
  );
};

export default ProjectExperimentList;
