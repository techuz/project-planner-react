import React, { useState } from 'react';
import { Box, Button, Collapse } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import ProjectListTable from '../../../components/Table/Project/List';
import CreateProject from '../../../components/Form/Project/CreateProject';

const ProjectList = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <Box sx={{ float: 'right', paddingBottom: 2 }} color="primary" px={2}>
        {!openForm && (
          <Button
            onClick={() => setOpenForm(!openForm)}
            variant="contained"
            startIcon={<AddIcon />}
            color="primary"
          >
            add new project
          </Button>
        )}
        <Collapse in={openForm} timeout="auto" unmountOnExit>
          <CreateProject closeForm={() => setOpenForm(false)} />
        </Collapse>
      </Box>
      <ProjectListTable />
    </>
  );
};

export default ProjectList;
