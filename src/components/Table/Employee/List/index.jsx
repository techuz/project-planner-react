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
import EmployeeNameCell from './EmployeeNameCell';
import { useNavigate } from 'react-router-dom';
import TechSkillsListCell from './TechSkillsListCell';
import employeeList from '../../../../StaticData/employeeList.json';

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
          onClick={() => navigate(`/employees/detail/${row.id}`)}>
          <EmployeeNameCell employee={row.employee_name} />
        </TableCell>
        <TableCell align="center">
          <ProjectListCell projects={row.project_allocated} totalHours={row.totalHours} />
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
    id: PropTypes.string.isRequired,
    employee_name: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
    ).isRequired,
    project_allocated: PropTypes.arrayOf(
      PropTypes.shape({
        project_name: PropTypes.string.isRequired,
        hours: PropTypes.string.isRequired
      })
    ).isRequired,
    availability: PropTypes.string.isRequired,
    totalHours: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    tech_skills: PropTypes.arrayOf(
      PropTypes.shape({
        skill_name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

const rows = employeeList;

export default function Index() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
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
