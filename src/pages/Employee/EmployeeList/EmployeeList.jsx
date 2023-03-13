import { Box, Button, Collapse } from '@mui/material';
import React, { useState } from 'react';

import EmployeeListTable from '../../../components/Table/Employee/List';
import AddIcon from '@mui/icons-material/Add';
import CreateEmployee from '../../../components/Form/Employee/CreateEmployee';

const EmployeeList = () => {
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
            add new employee
          </Button>
        )}
        <Collapse in={openForm} timeout="auto" unmountOnExit>
          <CreateEmployee closeForm={() => setOpenForm(false)} />
        </Collapse>
      </Box>

      <EmployeeListTable />
    </>
  );
};

export default EmployeeList;
