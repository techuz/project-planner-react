import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ProjectLeadTableCell from './ProjectLeadTableCell';
import ActionTableCell from './ActionTableCell';

import team1 from '../../../assets/images/team-1.jpg';
import team2 from '../../../assets/images/team-2.jpg';
import team3 from '../../../assets/images/team-3.jpg';
import team4 from '../../../assets/images/team-4.jpg';
import team5 from '../../../assets/images/team-5.jpg';

function createData(
  project_name,
  project_lead,
  developers,
  date,
  budget,
  status,
  milestone
) {
  return {
    project_name,
    project_lead,
    developers,
    date,
    budget,
    status,
    milestone,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {row.project_name}
        </TableCell>
        <TableCell align="center">
          <ProjectLeadTableCell members={row.project_lead} />
        </TableCell>
        <TableCell align="center">
          <ProjectLeadTableCell members={row.developers} />
        </TableCell>
        <TableCell align="center">{row.date}</TableCell>
        <TableCell align="center">{row.budget}</TableCell>
        <TableCell align="center">
          <Chip
            label={row.status}
            color={row.status === 'active' ? 'success' : 'error'}
          />
        </TableCell>
        <TableCell align="center">
          <ActionTableCell />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Milestone
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Start date</TableCell>
                    <TableCell align="center">End date</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Checklist</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.milestone.map((mRow) => (
                    <TableRow key={mRow.startDate}>
                      <TableCell align="center" component="th" scope="row">
                        {mRow.name}
                      </TableCell>
                      <TableCell align="center">{mRow.startDate}</TableCell>
                      <TableCell align="center">{mRow.endDate}</TableCell>
                      <TableCell align="center">
                        <Chip
                          label={mRow.status}
                          color={
                            mRow.status === 'completed' ? 'success' : 'warning'
                          }
                        />
                      </TableCell>
                      <TableCell align="center">{mRow.checklist}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    project_lead: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
    developers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        hours: PropTypes.string.isRequired,
      })
    ).isRequired,
    budget: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    milestone: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        checklist: PropTypes.string.isRequired,
      })
    ).isRequired,
    project_name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    'Frozen yoghurt',
    [
      {
        name: 'Ryan Tompson',
        image: team1,
      },
    ],
    [
      {
        name: 'Ryan Tompson',
        image: team2,
        hours: '40 hours',
      },
      {
        name: 'Romina Hadid',
        image: team3,
        hours: '35 hours',
      },
      {
        name: 'Alexander Smith',
        image: team4,
        hours: '25 hours',
      },
      {
        name: 'Jessica Doe',
        image: team5,
        hours: '55 hours',
      },
    ],
    '2023-01-02',
    '$14,000',
    'active',
    [
      {
        name: 'M1',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'completed',
        checklist: 'this is milestone 1',
      },
      {
        name: 'M2',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'pending',
        checklist: 'this is milestone 2',
      },
    ]
  ),
  createData(
    'Ice cream sandwich',
    [
      {
        name: 'Romina Hadid',
        image: team2,
      },
    ],
    [
      {
        name: 'Ryan Tompson',
        image: team1,
        hours: '40 hours',
      },
      {
        name: 'Romina Hadid',
        image: team3,
        hours: '35 hours',
      },
      {
        name: 'Alexander Smith',
        image: team4,
        hours: '25 hours',
      },
      {
        name: 'Jessica Doe',
        image: team5,
        hours: '55 hours',
      },
    ],
    '2023-01-02',
    '$24,000',
    'in-active',
    [
      {
        name: 'M1',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'pending',
        checklist: 'this is milestone 1',
      },
      {
        name: 'M2',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'completed',
        checklist: 'this is milestone 2',
      },
    ]
  ),
  createData(
    'Eclair',
    [
      {
        name: 'Alexander Smith',
        image: team3,
      },
    ],
    [
      {
        name: 'Ryan Tompson',
        image: team2,
        hours: '40 hours',
      },
      {
        name: 'Romina Hadid',
        image: team1,
        hours: '35 hours',
      },
      {
        name: 'Alexander Smith',
        image: team4,
        hours: '25 hours',
      },
      {
        name: 'Jessica Doe',
        image: team5,
        hours: '55 hours',
      },
    ],
    '2022-05-12',
    '$23,000',
    'active',
    [
      {
        name: 'M1',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'completed',
        checklist: 'this is milestone 1',
      },
      {
        name: 'M2',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'completed',
        checklist: 'this is milestone 2',
      },
    ]
  ),
  createData(
    'Cupcake',
    [
      {
        name: 'Jessica Doe',
        image: team4,
      },
    ],
    [
      {
        name: 'Ryan Tompson',
        image: team2,
        hours: '40 hours',
      },
      {
        name: 'Romina Hadid',
        image: team3,
        hours: '35 hours',
      },
      {
        name: 'Alexander Smith',
        image: team1,
        hours: '25 hours',
      },
      {
        name: 'Jessica Doe',
        image: team5,
        hours: '55 hours',
      },
    ],
    '2021-07-27',
    '$18,500',
    'in-active',
    [
      {
        name: 'M1',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'completed',
        checklist: 'this is milestone 1',
      },
      {
        name: 'M2',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'pending',
        checklist: 'this is milestone 2',
      },
      {
        name: 'M3',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'pending',
        checklist: 'this is milestone 3',
      },
      {
        name: 'M4',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'pending',
        checklist: 'this is milestone 4',
      },
    ]
  ),
  createData(
    'Gingerbread',
    [
      {
        name: 'John Doe',
        image: team5,
      },
    ],
    [
      {
        name: 'Ryan Tompson',
        image: team2,
        hours: '40 hours',
      },
      {
        name: 'Romina Hadid',
        image: team3,
        hours: '35 hours',
      },
      {
        name: 'Alexander Smith',
        image: team4,
        hours: '25 hours',
      },
      {
        name: 'Jessica Doe',
        image: team1,
        hours: '55 hours',
      },
    ],
    '2022-11-20',
    '$34,000',
    'active',
    [
      {
        name: 'M1',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'pending',
        checklist: 'this is milestone 1',
      },
      {
        name: 'M2',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'completed',
        checklist: 'this is milestone 2',
      },
    ]
  ),
];

export default function index() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Project name</TableCell>
            <TableCell align="center">Project lead</TableCell>
            <TableCell align="center">Developers</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Budget</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.project_name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
