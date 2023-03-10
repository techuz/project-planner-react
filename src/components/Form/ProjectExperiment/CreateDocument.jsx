import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

export default function CreateDocument(props) {
  const { closeForm } = props;
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        padding: 3,
        border: '2px solid rgba(224, 224, 224, 1)',
        borderRadius: 2
      }}>
      <Box>
        <form onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: 500 }
            }}
            noValidate
            autoComplete="off">
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                label="Name"
                variant="filled"
                // fullWidth
                margin="normal"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                label="Link"
                variant="filled"
                // fullWidth
                margin="normal"
                value={link}
                onChange={(event) => setLink(event.target.value)}
              />
            </Box>
            <Button variant="outlined" startIcon={<SaveIcon />}>
              Save
            </Button>
            &nbsp;
            <Button variant="outlined" onClick={closeForm}>
              Close
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
