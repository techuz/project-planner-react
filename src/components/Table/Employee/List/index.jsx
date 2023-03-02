import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import ActionTableCell from './ActionTableCell';
import ProjectListCell from './ProjectListCell';
import AddIcon from '@mui/icons-material/Add';

import team1 from '../../../../assets/images/team-1.jpg';
import team2 from '../../../../assets/images/team-2.jpg';
import team3 from '../../../../assets/images/team-3.jpg';
import team4 from '../../../../assets/images/team-4.jpg';
import team5 from '../../../../assets/images/team-5.jpg';
import react from '../../../../assets/images/react.png';
import angular from '../../../../assets/images/angular.png';
import node from '../../../../assets/images/node.png';
import mysql from '../../../../assets/images/mysql.png';
import php from '../../../../assets/images/php.png';
import EmployeeNameCell from './EmployeeNameCell';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TechSkillsListCell from './TechSkillsListCell';

function createData(
  employee_name,
  project_allocated,
  availability,
  totalHours,
  position,
  tech_skills
) {
  return {
    employee_name,
    project_allocated,
    availability,
    totalHours,
    position,
    tech_skills,
  };
}

function Row(props) {
  const { row } = props;
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell
          align="center"
          component="th"
          scope="row"
          onClick={() =>
            navigate('/employee-detail', {
              state: { row, permissions: 'View' },
            })
          }
        >
          <EmployeeNameCell employee={row.employee_name} />
        </TableCell>
        <TableCell align="center">
          <ProjectListCell
            projects={row.project_allocated}
            totalHours={row.totalHours}
          />
        </TableCell>
        <TableCell align="center">
          <Chip
            label={row.availability}
            color={row.availability === 'available' ? 'success' : 'error'}
          />
        </TableCell>
        <TableCell align="center">{row.position}</TableCell>
        <TableCell align="center">
          <TechSkillsListCell techSkills={row.tech_skills} />
        </TableCell>
        <TableCell align="center">
          <ActionTableCell row={row} />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    employee_name: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
    project_allocated: PropTypes.arrayOf(
      PropTypes.shape({
        project_name: PropTypes.string.isRequired,
        hours: PropTypes.string.isRequired,
      })
    ).isRequired,
    availability: PropTypes.string.isRequired,
    totalHours: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    tech_skills: PropTypes.arrayOf(
      PropTypes.shape({
        skill_name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData(
    [
      {
        name: 'Ryan Tompson',
        image: team1,
      },
    ],
    [
      {
        project_name: 'Frozen yoghurt',
        hours: '10 hrs/week',
      },
      {
        project_name: 'Temple run',
        hours: '12 hrs/week',
      },
      {
        project_name: 'Fury ukraine',
        hours: '8 hrs/week',
      },
    ],
    '10 hrs/week',
    '30 hrs/week',
    'jr.developer',
    [
      {
        skill_name: 'React js',
        image: react,
      },
      {
        skill_name: 'Node js',
        image: node,
      },
      {
        skill_name: 'Mysql',
        image: mysql,
      },
    ]
  ),
  createData(
    [
      {
        name: 'Romina Hadid',
        image: team2,
      },
    ],
    [
      {
        project_name: 'Frozen yoghurt',
        hours: '14 hrs/week',
      },
      {
        project_name: 'Temple run',
        hours: '12 hrs/week',
      },
      {
        project_name: 'Fury ukraine',
        hours: '8 hrs/week',
      },
    ],
    '06 hrs/week',
    '34 hrs/week',
    'sr.developer',
    [
      {
        skill_name: 'Php',
        image: php,
      },
      {
        skill_name: 'Mysql',
        image: mysql,
      },
    ]
  ),
  createData(
    [
      {
        name: 'Alexander Smith',
        image: team3,
      },
    ],
    [
      {
        project_name: 'Frozen yoghurt',
        hours: '20 hrs/week',
      },
    ],
    '20 hrs/week',
    '20 hrs/week',
    'jr.developer',
    [
      {
        skill_name: 'Node js',
        image: node,
      },
      {
        skill_name: 'Mysql',
        image: mysql,
      },
    ]
  ),
  createData(
    [
      {
        name: 'Jessica Doe',
        image: team4,
      },
    ],
    [
      {
        project_name: 'Frozen yoghurt',
        hours: '10 hrs/week',
      },
      {
        project_name: 'Temple run',
        hours: '10 hrs/week',
      },
      {
        project_name: 'Fury ukraine',
        hours: '10 hrs/week',
      },
    ],
    '10 hrs/week',
    '30 hrs/week',
    'jr.developer',
    [
      {
        skill_name: 'Angular js',
        image: node,
      },
      {
        skill_name: 'Mysql',
        image: mysql,
      },
      {
        skill_name: 'Node js',
        image: node,
      },
    ]
  ),
  createData(
    [
      {
        name: 'Tony stark',
        image: team5,
      },
    ],
    [
      {
        project_name: 'Frozen yoghurt',
        hours: '22 hrs/week',
      },
      {
        project_name: 'Temple run',
        hours: '13 hrs/week',
      },
    ],
    '5 hrs/week',
    '35 hrs/week',
    'sr.developer',
    [
      {
        skill_name: 'React js',
        image: angular,
      },
      {
        skill_name: 'Node js',
        image: node,
      },
      {
        skill_name: 'Mysql',
        image: mysql,
      },
    ]
  ),
];

export default function Index() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <Box sx={{ float: 'right', paddingBottom: 2 }} color="primary" px={2}>
        <Button
          onClick={() => navigate('/employee-list/create-new-employee')}
          variant="contained"
          startIcon={<AddIcon />}
          color="primary"
        >
          add new employee
        </Button>
      </Box>
      <TableContainer component={Paper} elevation={4}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Employee name</TableCell>
              <TableCell align="center">Allocation</TableCell>
              <TableCell align="center">Availability</TableCell>
              <TableCell align="center">Position</TableCell>
              <TableCell align="center">Tech skills</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <Row key={row.project_name} row={row} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
