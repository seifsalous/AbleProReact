import { useRef } from 'react';
import { Outlet } from 'react-router';

// material-ui
import Grid from '@mui/material/Grid';

// project-imports
import { GRID_COMMON_SPACING } from 'config';
import ProfileCard from 'sections/apps/profiles/user/ProfileCard';
import ProfileTabs from 'sections/apps/profiles/user/ProfileTabs';

// ==============================|| PROFILE - USER ||============================== //

export default function UserProfile() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <Grid container spacing={GRID_COMMON_SPACING}>
      <Grid size={12}>
        <ProfileCard focusInput={focusInput} />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <ProfileTabs focusInput={focusInput} />
      </Grid>
      <Grid size={{ xs: 12, md: 9 }}>
        <Outlet context={inputRef} />
      </Grid>
    </Grid>
  );
}
