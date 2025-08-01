// material-ui
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// project-imports
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import MoreIcon from 'components/@extended/MoreIcon';
import MainCard from 'components/MainCard';
import { ImagePath, getImageUrl } from 'utils/getImageUrl';

// table data
function createData(name: string, avatar: string, email: string, role: number, status: boolean) {
  return { name, avatar, email, role, status };
}

const rows = [
  createData('Frozen Tek', 'avatar-1.png', 'owner@company.com', 1, true),
  createData('Eclair Dues', 'avatar-3.png', 'manager@company.com', 2, true),
  createData('Schem Lein', 'avatar-2.png', 'sl@company.com', 3, false),
  createData('Jhon Doe', 'avatar-4.png', 'jd@company.com', 3, true),
  createData('Tevoni Wug', 'avatar-5.png', 'tw@company.com', 0, false)
];

// ==============================|| ACCOUNT PROFILE - ROLE ||============================== //

export default function TabRole() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <MainCard title="Invite Team Members" content={false}>
          <Stack sx={{ gap: 2.5, p: 2.5 }}>
            <Typography variant="h4">
              5/10{' '}
              <Typography variant="subtitle1" component="span">
                members available in your plan.
              </Typography>
            </Typography>
            <Divider />
            <Stack
              direction="row"
              sx={{ gap: 3, justifyContent: 'space-between', alignItems: 'flex-end', width: { xs: 1, md: '80%', lg: '60%' } }}
            >
              <Stack sx={{ gap: 1, width: `calc(100% - 110px)` }}>
                <InputLabel htmlFor="outlined-email">Email Address</InputLabel>
                <TextField fullWidth id="outlined-email" variant="outlined" placeholder="Enter your email address" />
              </Stack>
              <Button variant="contained" size="large">
                Send
              </Button>
            </Stack>
          </Stack>
          <TableContainer>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ pl: 3 }}>Member</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow hover key={row.name}>
                    <TableCell sx={{ pl: 3 }} component="th">
                      <Stack direction="row" sx={{ gap: 1.25, alignItems: 'center' }}>
                        <Avatar alt="Avatar 1" src={getImageUrl(`${row.avatar}`, ImagePath.USERS)} />
                        <Stack>
                          <Typography variant="subtitle1">{row.name}</Typography>
                          <Typography variant="caption" color="secondary">
                            {row.email}
                          </Typography>
                        </Stack>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      {row.role === 1 && <Chip size="small" color="primary" label="Owner" />}
                      {row.role === 2 && <Chip size="small" variant="light" color="info" label="Manager" />}
                      {row.role === 3 && <Chip size="small" variant="light" color="warning" label="Staff" />}
                      {row.role === 0 && <Chip size="small" variant="light" color="success" label="Customer" />}
                    </TableCell>
                    <TableCell align="right">
                      {!row.status && (
                        <Stack direction="row" sx={{ gap: 1.25, alignItems: 'center', justifyContent: 'flex-end' }}>
                          <Button size="small" color="error">
                            Resend
                          </Button>
                          <Chip size="small" color="info" variant="outlined" label="Invited" />
                        </Stack>
                      )}
                      {row.status && <Chip size="small" color="success" label="Joined" />}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small" color="secondary">
                        <MoreIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </MainCard>
      </Grid>
      <Grid size={12}>
        <Stack direction="row" sx={{ gap: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Button color="error">Cancel</Button>
          <Button variant="contained">Update Profile</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
