import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Avatar, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';

import xcel from '../../../assets/images/xcel.jpeg';
import Link from '@mui/material/Link';
import ProjectUsersTableCell from './ProjectUsersTableCell';
import contentPlanList from '../../../StaticData/contentPlanList.json';

function Row(props) {
  const { row } = props;
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="center" component="th" scope="row">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              src={xcel}
              alt="name"
              sx={{ width: 20, height: 20, mr: 1 }}
              variant="square"
            />
            <Link href={row.docs[0].link} target="_blank">
              {row.docs[0].name}
            </Link>
          </Box>
        </TableCell>
        <TableCell
          align="center"
          component="th"
          scope="row"
          onClick={() => navigate(`/content-plan-detail/${row.id}`)}
        >
          {row.topic}
        </TableCell>
        <TableCell align="center">{row.category}</TableCell>
        <TableCell align="center">
          <Chip
            label={row.deadline}
            color={row.deadline === 'completed' ? 'success' : 'warning'}
          />
        </TableCell>
        <TableCell align="center">
          <ProjectUsersTableCell members={row.users} />
        </TableCell>
        <TableCell align="center">
          <ProjectUsersTableCell members={row.allocatedBy} />
        </TableCell>
        <TableCell align="center">
          <Chip
            label={row.status}
            color={row.status === 'completed' ? 'success' : 'warning'}
          />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    docs: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
    topic: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        hours: PropTypes.string.isRequired,
      })
    ).isRequired,
    allocatedBy: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = contentPlanList;

export default function Index() {
  // const navigate = useNavigate();
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
      <Box sx={{ float: 'right', paddingBottom: 2 }} color="primary" px={2}>
        <Button
          // onClick={() => navigate('/dashboard/create-new-project')}
          variant="contained"
          startIcon={<AddIcon />}
          color="primary"
        >
          add new content
        </Button>
      </Box>
      <TableContainer component={Paper} elevation={4}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Documents</TableCell>
              <TableCell align="center">Topic</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Deadline</TableCell>
              <TableCell align="center">Users</TableCell>
              <TableCell align="center">Allocated By</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <Row key={row.topic} row={row} />
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
