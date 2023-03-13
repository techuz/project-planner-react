import { useState } from 'react';
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
  FormHelperText,
  Switch,
  Avatar,
  Collapse
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function CreateEmployee(props) {
  const { closeForm } = props;
  const [openForm, setOpenForm] = useState(false);
  const [projects, setProjects] = useState([]);

  const projectAllocated = [
    {
      name: 'Frozen yoghurt',
      value: 'Frozen yoghurt'
    },
    {
      name: 'Temple run',
      value: 'Temple run'
    },
    {
      name: 'Fury ukraine',
      value: 'Fury ukraine'
    }
  ];

  const skillsList = [
    {
      name: 'React js',
      value: 'React js',
      image:
        'data:image/png;base64,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'
    },
    {
      name: 'Node js',
      value: 'Node js',
      image: '/static/media/node.570cedbdc40dcb9e0130.png'
    },
    {
      name: 'Mysql',
      value: 'Mysql',
      image: '/static/media/mysql.6e42b2a035b28f240021.png'
    },
    {
      name: 'Angular js',
      value: 'Angular js',
      image: '/static/media/node.570cedbdc40dcb9e0130.png'
    },
    {
      name: 'Php',
      value: 'Php',
      image:
        'data:image/png;base64,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'
    }
  ];

  const positions = [
    {
      name: 'Sr. developer',
      value: 'Sr. developer'
    },
    {
      name: 'Jr. developer',
      value: 'Jr. developer'
    }
  ];
  const projectsValidationSchema = Yup.object().shape({
    project_name: Yup.string(),
    hours: Yup.number()
  });

  const projectsFormik = useFormik({
    initialValues: {
      project_name: '',
      hours: 0
    },
    validationSchema: projectsValidationSchema,
    onSubmit: () => {}
  });

  const validationSchema = Yup.object().shape({
    employee_name: Yup.string().required('Employee name is Required'),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    position: Yup.string().required('Position is required'),
    skills: Yup.array().min(1, 'Skills is required'),
    project_allocated: Yup.object().shape({
      project_name: Yup.string(),
      hours: Yup.number()
    }),
    is_active: Yup.boolean()
  });

  const formik = useFormik({
    initialValues: {
      employee_name: '',
      email: '',
      position: '',
      skills: [],
      is_active: false
    },
    validationSchema: validationSchema,
    onSubmit: () => {}
  });

  const handleProjectsChange = () => {
    const beforeProjects = [...projects];
    const projectObject = {
      name: projectsFormik.values.project_name,
      hours: `${projectsFormik.values.hours} hrs/week`
    };
    beforeProjects.push(projectObject);
    setProjects([...beforeProjects]);
    projectsFormik.values.project_name = '';
    projectsFormik.values.hours = 0;
    setOpenForm(false);
  };

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
              label="Employee name"
              name="employee_name"
              variant="filled"
              fullWidth
              margin="normal"
              value={formik.values.employee_name}
              onChange={formik.handleChange}
              error={formik.touched.employee_name && Boolean(formik.errors.employee_name)}
              helperText={formik.touched.employee_name && formik.errors.employee_name}
              inputProps={{ maxLength: 50 }}
            />
            <TextField
              label="Email"
              name="email"
              variant="filled"
              fullWidth
              margin="normal"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              inputProps={{ maxLength: 50 }}
            />
            <TextField
              id="filled-select-currency"
              select
              label="Position"
              name="position"
              variant="filled"
              fullWidth
              value={formik.values.position}
              onChange={formik.handleChange}
              error={formik.touched.position && Boolean(formik.errors.position)}
              helperText={formik.touched.position && formik.errors.position}>
              {positions.map((option) => (
                <MenuItem key={option.name} value={option.value}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography ml={1}>{option?.name}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </TextField>
            <FormControl sx={{ m: 1 }}>
              <InputLabel
                className={formik.touched.skills && formik.errors.skills ? 'Mui-error' : ''}
                id="demo-multiple-chip-label">
                Skills
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                fullWidth
                name="skills"
                input={<FilledInput />}
                value={formik.values.skills}
                onChange={formik.handleChange}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}>
                {skillsList.map((option) => (
                  <MenuItem key={option.name} value={option.name}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={option?.image} alt={option?.name} />
                      <Typography ml={1}>{option?.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText className="Mui-error">
                {formik.touched.skills && formik.errors.skills}
              </FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1 }}>
              <InputLabel id="demo-multiple-chip-label">Project allocated</InputLabel>
              <Box mt={5}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 0.5,
                      width: 500
                    }}>
                    {projects.map((item) => (
                      <Chip key={item.name} label={`${item.name}, ${item.hours}`} />
                    ))}
                  </Box>

                  <Collapse in={openForm} timeout="auto" unmountOnExit>
                    <TextField
                      id="filled-select-currency"
                      select
                      label="Projects"
                      name="project_name"
                      value={projectsFormik.values.project_name}
                      variant="filled"
                      sx={{ width: '300px !important' }}
                      onChange={projectsFormik.handleChange}>
                      {projectAllocated.map((option) => (
                        <MenuItem key={option.name} value={option.value}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography ml={1}>{option?.name}</Typography>
                          </Box>
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      sx={{ width: '100px !important' }}
                      label="hours"
                      name="hours"
                      type="number"
                      InputProps={{ inputProps: { min: 0, max: 40 } }}
                      variant="filled"
                      margin="normal"
                      value={projectsFormik.values.hours}
                      onChange={projectsFormik.handleChange}
                    />
                    <Button
                      sx={{ width: 60, mt: 2 }}
                      variant="contained"
                      onClick={() => handleProjectsChange()}
                      disabled={
                        !(projectsFormik.values.hours && projectsFormik.values.project_name)
                      }
                      color="primary">
                      Save
                    </Button>
                  </Collapse>
                </Box>
                <Button
                  sx={{ width: 100 }}
                  onClick={() => setOpenForm(true)}
                  startIcon={<AddIcon />}
                  color="primary">
                  add
                </Button>
              </Box>
            </FormControl>
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
