import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import EmployeeNameCell from './EmployeeNameCell';
import ActionTableCell from './ActionTableCell';

function Row(props) {
  const { row, shouldEdit } = props;
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="center" component="th" scope="row">
          {row.risk}
        </TableCell>
        <TableCell align="center">
          <Chip label={row.status} color={row.status === 'resolved' ? 'success' : 'error'} />
        </TableCell>
        <TableCell align="center">
          <EmployeeNameCell employee={row.raisedBy} />
        </TableCell>
        <TableCell align="center">
          <EmployeeNameCell employee={row.resolvedBy} />
        </TableCell>
        <TableCell align="center">
          <ActionTableCell shouldEdit={shouldEdit} />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function Index(props) {
  const { rows, shouldOpenEditForm } = props;
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
              <TableCell align="center">Risk</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Raised By</TableCell>
              <TableCell align="center">Resolved By</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <Row key={row.risk} row={row} shouldEdit={shouldOpenEditForm} />
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
