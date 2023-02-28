import { Box, Typography, FormLabel, Chip } from '@mui/material';

import EmployeeNameCell from '../../../../components/Table/Employee/List/EmployeeNameCell';
import ProjectListCell from '../../../../components/Table/Employee/List/ProjectListCell';
import TechSkillsListCell from '../../../../components/Table/Employee/List/TechSkillsListCell';

export default function Summary(props) {
  const { data } = props;

  return (
    <Box sx={{ padding: 3 }}>
      <FormLabel>Summary</FormLabel>
      <Box sx={{ margin: 1 }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          Employee name: &nbsp;
          <EmployeeNameCell employee={data.employee_name} />
        </Typography>
      </Box>
      <Box sx={{ margin: 1 }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          Allocation: &nbsp;
          <ProjectListCell projects={data.project_allocated} />
        </Typography>
      </Box>
      <Box sx={{ margin: 1 }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          Availability: &nbsp;
          <Chip
            label={data.availability}
            color={data.availability === 'available' ? 'success' : 'error'}
          />
        </Typography>
      </Box>
      <Box sx={{ margin: 1 }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          Position: &nbsp;
          {data.position}
        </Typography>
      </Box>
      <Box sx={{ margin: 1 }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          Tech skills : &nbsp;
          <TechSkillsListCell techSkills={data.tech_skills} />
        </Typography>
      </Box>
    </Box>
  );
}
