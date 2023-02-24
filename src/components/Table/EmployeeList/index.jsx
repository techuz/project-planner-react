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

import team1 from '../../../assets/images/team-1.jpg';
import team2 from '../../../assets/images/team-2.jpg';
import team3 from '../../../assets/images/team-3.jpg';
import team4 from '../../../assets/images/team-4.jpg';
import team5 from '../../../assets/images/team-5.jpg';
import EmployeeNameCell from './EmployeeNameCell';

function createData(employee_name, project_allocated, availability, position) {
  return {
    employee_name,
    project_allocated,
    availability,
    position,
  };
}

function Row(props) {
  const { row } = props;
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="center" component="th" scope="row">
          <EmployeeNameCell employee={row.employee_name} />
        </TableCell>
        <TableCell align="center">
          <ProjectListCell projects={row.project_allocated} />
        </TableCell>
        <TableCell align="center">
          <Chip
            label={row.availability}
            color={row.availability === 'available' ? 'success' : 'error'}
          />
        </TableCell>
        <TableCell align="center">{row.position}</TableCell>
        <TableCell align="center">
          <ActionTableCell />
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
    position: PropTypes.string.isRequired,
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
        hours: '10 hours',
      },
      {
        project_name: 'Temple run',
        hours: '30 hours',
      },
      {
        project_name: 'Fury ukraine',
        hours: '27 hours',
      },
    ],
    'available',
    'jr.developer'
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
        hours: '20 hours',
      },
      {
        project_name: 'Temple run',
        hours: '30 hours',
      },
      {
        project_name: 'Fury ukraine',
        hours: '27 hours',
      },
    ],
    'available',
    'sr.developer'
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
        hours: '10 hours',
      },
    ],
    'unavailable',
    'jr.developer'
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
        hours: '10 hours',
      },
      {
        project_name: 'Temple run',
        hours: '30 hours',
      },
      {
        project_name: 'Fury ukraine',
        hours: '27 hours',
      },
    ],
    'available',
    'jr.developer'
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
        hours: '10 hours',
      },
      {
        project_name: 'Temple run',
        hours: '30 hours',
      },
    ],
    'unavailable',
    'sr.developer'
  ),
];

export default function Index() {
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
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Employee name</TableCell>
              <TableCell align="center">Project allocated</TableCell>
              <TableCell align="center">Availability</TableCell>
              <TableCell align="center">Position</TableCell>
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
