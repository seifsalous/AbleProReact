import { useState } from 'react';

// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import MainCard from 'components/MainCard';
import { GRID_COMMON_SPACING } from 'config';

// styles & constant
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = { PaperProps: { style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP } } };

// ==============================|| ACCOUNT PROFILE - MY ACCOUNT ||============================== //

export default function TabAccount() {
  const [signing, setSigning] = useState('facebook');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSigning(event.target.value);
  };

  const [checked, setChecked] = useState(['sb', 'ln', 'la']);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Grid container spacing={GRID_COMMON_SPACING}>
      <Grid size={12}>
        <MainCard title="General Settings">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="my-account-username">Username</InputLabel>
                <TextField fullWidth defaultValue="Asoka_Tana_16" id="my-account-username" placeholder="Username" autoFocus />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="my-account-email">Account Email</InputLabel>
                <TextField fullWidth defaultValue="user@tana.com" id="my-account-email" placeholder="Account Email" />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="my-account-lang">Language</InputLabel>
                <TextField fullWidth defaultValue="New York" id="my-account-lang" placeholder="Language" />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="my-account-signing">Signing Using</InputLabel>
                <Select fullWidth id="my-account-signing" value={signing} onChange={handleChange} MenuProps={MenuProps}>
                  <MenuItem value="form">Basic Form</MenuItem>
                  <MenuItem value="firebase">Firebase - Auth</MenuItem>
                  <MenuItem value="facebook">Facebook</MenuItem>
                  <MenuItem value="twitter">Twitter</MenuItem>
                  <MenuItem value="gmail">Gmail</MenuItem>
                  <MenuItem value="jwt">JWT</MenuItem>
                  <MenuItem value="auth0">AUTH0</MenuItem>
                </Select>
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <MainCard title="Advance Settings" content={false}>
          <List sx={{ p: 0 }}>
            <ListItem divider>
              <ListItemText
                id="switch-list-label-sb"
                primary="Secure Browsing"
                secondary="Browsing Securely ( https ) when it's necessary"
              />
              <Switch
                edge="end"
                onChange={handleToggle('sb')}
                checked={checked.indexOf('sb') !== -1}
                slotProps={{ input: { 'aria-labelledby': 'switch-list-label-sb' } }}
              />
            </ListItem>
            <ListItem divider>
              <ListItemText
                id="switch-list-label-ln"
                primary="Login Notifications"
                secondary="Notify when login attempted from other place"
              />
              <Switch
                edge="end"
                onChange={handleToggle('ln')}
                checked={checked.indexOf('ln') !== -1}
                slotProps={{ input: { 'aria-labelledby': 'switch-list-label-ln' } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                id="switch-list-label-la"
                primary="Login Approvals"
                secondary="Approvals is not required when login from unrecognized devices."
              />
              <Switch
                edge="end"
                onChange={handleToggle('la')}
                checked={checked.indexOf('la') !== -1}
                slotProps={{ input: { 'aria-labelledby': 'switch-list-label-la' } }}
              />
            </ListItem>
          </List>
        </MainCard>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <MainCard title="Recognized Devices" content={false}>
          <List sx={{ p: 0 }}>
            <ListItem divider>
              <ListItemText primary="Cent Desktop" secondary="4351 Deans Lane, Chelmsford" />
              <Stack direction="row" sx={{ gap: 0.75, alignItems: 'center' }}>
                <Box sx={{ width: 6, height: 6, bgcolor: 'success.main', borderRadius: '50%' }} />
                <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>Active</Typography>
              </Stack>
            </ListItem>
            <ListItem divider>
              <ListItemText primary="Imho Tablet" secondary="4185 Michigan Avenue" />
              <Stack direction="row" sx={{ gap: 0.75, alignItems: 'center' }}>
                <Box sx={{ width: 6, height: 6, bgcolor: 'secondary.main', borderRadius: '50%' }} />
                <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>Active 5 days ago</Typography>
              </Stack>
            </ListItem>
            <ListItem>
              <ListItemText primary="Albs Mobile" secondary="3462 Fairfax Drive, Montcalm" />
              <Stack direction="row" sx={{ gap: 0.75, alignItems: 'center' }}>
                <Box sx={{ width: 6, height: 6, bgcolor: 'secondary.main', borderRadius: '50%' }} />
                <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>Active 1 month ago</Typography>
              </Stack>
            </ListItem>
          </List>
        </MainCard>
      </Grid>
      <Grid size={12}>
        <MainCard title="Active Sessions" content={false}>
          <List sx={{ p: 0 }}>
            <ListItem divider>
              <ListItemText primary={<Typography variant="h5">Cent Desktop</Typography>} secondary="4351 Deans Lane, Chelmsford" />
              <Button>Logout</Button>
            </ListItem>
            <ListItem>
              <ListItemText primary={<Typography variant="h5">Moon Tablet</Typography>} secondary="4185 Michigan Avenue" />
              <Button>Logout</Button>
            </ListItem>
          </List>
        </MainCard>
      </Grid>
      <Grid size={12}>
        <Stack direction="row" sx={{ gap: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button variant="contained">Update Profile</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
