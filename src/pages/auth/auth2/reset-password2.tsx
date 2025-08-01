// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import AuthWrapper2 from 'sections/auth/AuthWrapper2';
import AuthResetPassword from 'sections/auth/auth-forms/AuthResetPassword';

// ================================|| RESET PASSWORD ||================================ //

export default function ResetPassword() {
  return (
    <AuthWrapper2>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Stack sx={{ gap: 1, mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Reset Password</Typography>
            <Typography color="secondary">Please choose your new password</Typography>
          </Stack>
        </Grid>
        <Grid size={12}>
          <AuthResetPassword />
        </Grid>
      </Grid>
    </AuthWrapper2>
  );
}
