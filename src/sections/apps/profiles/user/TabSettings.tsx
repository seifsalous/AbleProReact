import { useState } from 'react';

// material-ui
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

// project-imports
import MainCard from 'components/MainCard';

// assets
import { DocumentLike, Sms, Translate } from 'iconsax-reactjs';

// ==============================|| USER PROFILE - SETTINGS ||============================== //

export default function TabSettings() {
  const [checked, setChecked] = useState(['oc', 'usn', 'lc']);

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
    <MainCard title="Settings">
      <List sx={{ '& .MuiListItem-root': { p: 2 } }}>
        <ListItem divider>
          <ListItemIcon sx={{ color: 'primary.main', mr: 2, display: { xs: 'none', sm: 'block' } }}>
            <DocumentLike style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-oc"
            primary={<Typography variant="h5">Order Confirmation</Typography>}
            secondary="You will be notified when customer order any product"
          />
          <Switch
            edge="end"
            onChange={handleToggle('oc')}
            checked={checked.indexOf('oc') !== -1}
            slotProps={{ input: { 'aria-labelledby': 'switch-list-label-oc' } }}
          />
        </ListItem>
        <ListItem divider>
          <ListItemIcon sx={{ color: 'primary.main', mr: 2, display: { xs: 'none', sm: 'block' } }}>
            <Sms style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-sen"
            primary={<Typography variant="h5">Setup Email Notification</Typography>}
            secondary="Turn on email  notification to get updates through email"
          />
          <Switch
            edge="end"
            onChange={handleToggle('sen')}
            checked={checked.indexOf('sen') !== -1}
            slotProps={{ input: { 'aria-labelledby': 'switch-list-label-sen' } }}
          />
        </ListItem>
        <ListItem divider>
          <ListItemIcon sx={{ color: 'primary.main', mr: 2, display: { xs: 'none', sm: 'block' } }}>
            <Sms style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-usn"
            primary={<Typography variant="h5">Update System Notification</Typography>}
            secondary="You will be notified when customer order any product"
          />
          <Switch
            edge="end"
            onChange={handleToggle('usn')}
            checked={checked.indexOf('usn') !== -1}
            slotProps={{ input: { 'aria-labelledby': 'switch-list-label-usn' } }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: 'primary.main', mr: 2, display: { xs: 'none', sm: 'block' } }}>
            <Translate style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-lc"
            primary={<Typography variant="h5">Language Change</Typography>}
            secondary="You will be notified when customer order any product"
          />
          <Switch
            edge="end"
            onChange={handleToggle('lc')}
            checked={checked.indexOf('lc') !== -1}
            slotProps={{ input: { 'aria-labelledby': 'switch-list-label-lc' } }}
          />
        </ListItem>
      </List>
      <Stack direction="row" sx={{ gap: 2, justifyContent: 'flex-end', alignItems: 'center', mt: 2.5 }}>
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button variant="contained">Save</Button>
      </Stack>
    </MainCard>
  );
}
