import { useState, MouseEvent, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

// material-ui
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// assets
import { Card, Edit2, Logout, Profile, Profile2User } from 'iconsax-reactjs';

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

interface Props {
  handleLogout: () => void;
}

export default function ProfileTab({ handleLogout }: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [selectedIndex, setSelectedIndex] = useState<number>();
  const handleListItemClick = (event: MouseEvent<HTMLDivElement>, index: number, route: string = '') => {
    setSelectedIndex(index);

    if (route && route !== '') {
      navigate(route);
    }
  };

  useEffect(() => {
    const pathToIndex: { [key: string]: number } = {
      '/apps/profiles/user/personal': 0,
      '/apps/profiles/account/basic': 1,
      '/apps/profiles/account/personal': 3,
      '/apps/invoice/details/1': 4
    };

    setSelectedIndex(pathToIndex[pathname] ?? undefined);
  }, [pathname]);

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event: MouseEvent<HTMLDivElement>) => handleListItemClick(event, 0, '/apps/profiles/user/personal')}
      >
        <ListItemIcon>
          <Edit2 variant="Bulk" size={18} />
        </ListItemIcon>
        <ListItemText primary="Edit Profile" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={(event: MouseEvent<HTMLDivElement>) => handleListItemClick(event, 1, '/apps/profiles/account/basic')}
      >
        <ListItemIcon>
          <Profile variant="Bulk" size={18} />
        </ListItemIcon>
        <ListItemText primary="View Profile" />
      </ListItemButton>

      <ListItemButton
        selected={selectedIndex === 3}
        onClick={(event: MouseEvent<HTMLDivElement>) => handleListItemClick(event, 3, '/apps/profiles/account/personal')}
      >
        <ListItemIcon>
          <Profile2User variant="Bulk" size={18} />
        </ListItemIcon>
        <ListItemText primary="Social Profile" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 4}
        onClick={(event: MouseEvent<HTMLDivElement>) => handleListItemClick(event, 4, '/apps/invoice/details/1')}
      >
        <ListItemIcon>
          <Card variant="Bulk" size={18} />
        </ListItemIcon>
        <ListItemText primary="Billing" />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 2} onClick={handleLogout}>
        <ListItemIcon>
          <Logout variant="Bulk" size={18} />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
}
