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
  Avatar,
  FormHelperText
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import team1 from '../../../assets/images/team-1.jpg';
import team2 from '../../../assets/images/team-2.jpg';
import team3 from '../../../assets/images/team-3.jpg';
import team4 from '../../../assets/images/team-4.jpg';
import team5 from '../../../assets/images/team-5.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function CreateExperimentalProject(props) {
  const { closeForm } = props;

  const projectLeads = [
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
  const projectType = [
    {
      name: 'FIX',
      value: 'FIX'
    },
    {
      name: 'TM',
      value: 'TM'
    }
  ];

  const validationSchema = Yup.object().shape({
    project_name: Yup.string().required('Project name is Required'),
    project_lead: Yup.string().required('Project lead is required'),
    is_active: Yup.boolean(),
    project_deadline: Yup.string(),
    project_type: Yup.string(),
    project_members: Yup.array()
  });

  const formik = useFormik({
    initialValues: {
      project_name: '',
      project_lead: '',
      is_active: false,
      project_deadline: '',
      project_type: '',
      project_members: []
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
              label="Project name"
              name="project_name"
              variant="filled"
              fullWidth
              margin="normal"
              value={formik.values.project_name}
              onChange={formik.handleChange}
              error={formik.touched.project_name && Boolean(formik.errors.project_name)}
              helperText={formik.touched.project_name && formik.errors.project_name}
              inputProps={{ maxLength: 50 }}
            />
            <TextField
              id="filled-select-currency"
              select
              label="Project lead"
              name="project_lead"
              value={formik.values.project_lead}
              onChange={formik.handleChange}
              error={formik.touched.project_lead && Boolean(formik.errors.project_lead)}
              helperText={formik.touched.project_lead && formik.errors.project_lead}
              variant="filled">
              {projectLeads.map((option) => (
                <MenuItem key={option.name} value={option.value}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={option?.image} alt="name" sx={{ width: 20, height: 20 }} />
                    <Typography ml={1}>{option?.name}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </TextField>
            <FormControl sx={{ m: 1 }}>
              <InputLabel
                className={
                  formik.touched.project_members && formik.errors.project_members ? 'Mui-error' : ''
                }
                id="demo-multiple-chip-label">
                Project members
              </InputLabel>
              <Select
                name="project_members"
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                input={<FilledInput />}
                value={formik.values.project_members}
                onChange={formik.handleChange}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}>
                {projectLeads.map((option) => (
                  <MenuItem key={option.name} value={option.name}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={option?.image} alt="name" sx={{ width: 20, height: 20 }} />
                      <Typography ml={1}>{option?.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText className="Mui-error">
                {formik.touched.project_members && formik.errors.project_members}
              </FormHelperText>
            </FormControl>
            <TextField
              id="date"
              label="Project Deadline"
              name="project_deadline"
              type="date"
              variant="filled"
              value={formik.values.project_deadline}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="filled-select-currency"
              select
              label="Project Type"
              name="project_type"
              value={formik.values.project_type}
              variant="filled"
              fullWidth
              onChange={formik.handleChange}>
              {projectType.map((option) => (
                <MenuItem key={option.name} value={option.value}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
