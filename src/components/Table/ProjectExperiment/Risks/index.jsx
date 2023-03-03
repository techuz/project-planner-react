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
import { Box, Button, Collapse, MenuItem, TextField, Typography } from '@mui/material';
import ActionTableCell from './ActionTableCell';
import SaveIcon from '@mui/icons-material/Save';

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
  const { rows } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');

  const statuses = [
    {
      name: 'pending',
      value: 'pending'
    },
    {
      name: 'resolved',
      value: 'resolved'
    }
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <form onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{
              mb: 2,
              '& .MuiTextField-root': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off">
            <Box sx={{ display: 'flex' }}>
              <TextField
                id="filled-select-currency"
                select
                label="Stutus"
                value={status}
                variant="filled"
                onChange={(e) => setStatus(e.target.value)}>
                {statuses.map((option) => (
                  <MenuItem key={option.name} value={option.value}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography ml={1}>{option?.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box sx={{ display: 'flex', padding: 2 }}>
              <Button variant="outlined" startIcon={<SaveIcon />}>
                Save
              </Button>
              &nbsp;
              <Button variant="outlined" onClick={() => setOpen(false)}>
                close
              </Button>
            </Box>
          </Box>
        </form>
      </Collapse>
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
              <Row key={row.risk} row={row} shouldEdit={() => setOpen(true)} />
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
