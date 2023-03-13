import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Chip,
  Select,
  FilledInput,
  FormControl,
  InputLabel,
  FormControlLabel,
  Switch,
  Avatar
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import team1 from '../../../assets/images/team-1.jpg';
import team2 from '../../../assets/images/team-2.jpg';
import team3 from '../../../assets/images/team-3.jpg';
import team4 from '../../../assets/images/team-4.jpg';
import team5 from '../../../assets/images/team-5.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function CreateContent(props) {
  const { closeForm } = props;

  const developers = [
    {
      name: 'Ryan Tompson',
      value: 'Ryan Tompson',
      image: team1
    },
    {
      name: 'Romina Hadid',
      value: 'Romina Hadid',
      image: team2
    },
    {
      name: 'Alexander Smith',
      value: 'Alexander Smith',
      image: team3
    },
    {
      name: 'Jessica Doe',
      value: 'Jessica Doe',
      image: team4
    },
    {
      name: 'Bruce Banner',
      value: 'Bruce Banner',
      image: team5
    }
  ];
  const categories = [
    {
      name: 'Category1',
      value: 'Category1'
    },
    {
      name: 'Category2',
      value: 'Category2'
    },
    {
      name: 'Category3',
      value: 'Category3'
    }
  ];

  const validationSchema = Yup.object().shape({
    document_link: Yup.string().required('Document link is required'),
    topic: Yup.string().required('Topic name is required'),
    category: Yup.string().required('Category is required'),
    is_active: Yup.boolean(),
    deadline: Yup.string(),
    allocated_by: Yup.string(),
    users: Yup.array()
  });

  const formik = useFormik({
    initialValues: {
      document_link: '',
      topic: '',
      category: '',
      is_active: false,
      deadline: '',
      allocated_by: '',
      users: []
    },
    validationSchema: validationSchema,
    onSubmit: () => {}
  });

  return (
    <Box
      sx={{
        padding: 3,
        border: '2px solid rgba(224, 224, 224, 1)',
        borderRadius: 2
      }}>
      <Box>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: 500 }
          }}
          noValidate
          onSubmit={formik.handleSubmit}
          autoComplete="off">
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              label="Document link"
              name="document_link"
              variant="filled"
              fullWidth
              margin="normal"
              value={formik.values.document_link}
              onChange={formik.handleChange}
              error={formik.touched.document_link && Boolean(formik.errors.document_link)}
              helperText={formik.touched.document_link && formik.errors.document_link}
            />
            <TextField
              label="Topic"
              name="topic"
              variant="filled"
              fullWidth
              margin="normal"
              value={formik.values.topic}
              onChange={formik.handleChange}
              error={formik.touched.topic && Boolean(formik.errors.topic)}
              helperText={formik.touched.topic && formik.errors.topic}
            />
            <TextField
              id="filled-select-currency"
              select
              label="Category"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category}
              variant="filled"
              fullWidth>
              {categories.map((option) => (
                <MenuItem key={option.name} value={option.value}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography ml={1}>{option?.name}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="date"
              label="Deadline"
              name="deadline"
              type="date"
              variant="filled"
              value={formik.values.deadline}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true
              }}
            />
            <FormControl sx={{ m: 1 }}>
              <InputLabel id="demo-multiple-chip-label">Users</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                name="users"
                input={<FilledInput />}
                value={formik.values.users}
                onChange={formik.handleChange}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}>
                {developers.map((option) => (
                  <MenuItem key={option.name} value={option.name}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={option?.image} alt="name" sx={{ width: 20, height: 20 }} />
                      <Typography ml={1}>{option?.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="filled-select-currency"
              select
              label="Allocated by"
              name="allocated_by"
              value={formik.values.allocated_by}
              variant="filled"
              onChange={formik.handleChange}>
              {developers.map((option) => (
                <MenuItem key={option.name} value={option.value}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={option?.image} alt="name" sx={{ width: 20, height: 20 }} />
                    <Typography ml={1}>{option?.name}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </TextField>
            <FormControl sx={{ m: 2 }}>
              <FormControlLabel
                name="is_active"
                control={<Switch checked={formik.values.is_active} />}
                onChange={formik.handleChange}
                label={formik.values.is_active ? 'Active' : 'Inactive'}
              />
            </FormControl>
          </Box>
          <Button type="submit" variant="outlined" startIcon={<SaveIcon />}>
            Save
          </Button>
          &nbsp;
          <Button variant="outlined" onClick={closeForm}>
            Close
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
