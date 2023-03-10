import { Box, Button, Collapse } from '@mui/material';
import { useState } from 'react';
import DocumentsAndListTable from '../../../../components/Table/ProjectExperiment/DocumnetsAndLinks';
import CreateDocument from '../../../../components/Form/ProjectExperiment/CreateDocument';
import AddIcon from '@mui/icons-material/Add';

export default function DocumentsAndLinks(props) {
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
            add new document
          </Button>
        )}
        <Collapse in={openForm} timeout="auto" unmountOnExit>
          <CreateDocument closeForm={() => setOpenForm(false)} />
        </Collapse>
      </Box>
      <DocumentsAndListTable rows={data.documents} />
    </Box>
  );
}
