import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Collapse } from '@mui/material';

import ContentPlanTableList from '../../../components/Table/ContentPlan';
import CreateContent from '../../../components/Form/ContentPlan/CreateContent';

const ContentPlanList = () => {
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
            add new content
          </Button>
        )}
        <Collapse in={openForm} timeout="auto" unmountOnExit>
          <CreateContent closeForm={() => setOpenForm(false)} />
        </Collapse>
      </Box>
      <ContentPlanTableList />
    </>
  );
};

export default ContentPlanList;
