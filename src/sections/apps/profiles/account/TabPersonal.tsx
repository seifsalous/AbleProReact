import { useEffect, useState, ChangeEvent } from 'react';

// material-ui
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import { PatternFormat } from 'react-number-format';

// project-imports
import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';
import { GRID_COMMON_SPACING, facebookColor, linkedInColor } from 'config';

// assets
import defaultImages from 'assets/images/users/default.png';

// assets
import { Apple, Camera, Facebook, Google } from 'iconsax-reactjs';

// styles & constant
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
};

// ==============================|| ACCOUNT PROFILE - PERSONAL ||============================== //

export default function TabPersonal() {
  const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
  const [avatar, setAvatar] = useState<string | undefined>(defaultImages);

  useEffect(() => {
    if (selectedImage) {
      setAvatar(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const [experience, setExperience] = useState('0');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setExperience(event.target.value);
  };

  return (
    <Grid container spacing={GRID_COMMON_SPACING}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <MainCard title="Personal Information">
          <Grid container spacing={3}>
            <Grid size={12}>
              <Stack sx={{ gap: 2.5, alignItems: 'center', m: 3 }}>
                <FormLabel
                  htmlFor="change-avtar"
                  sx={{
                    position: 'relative',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    '&:hover .MuiBox-root': { opacity: 1 },
                    cursor: 'pointer'
                  }}
                >
                  <Avatar alt="Avatar 1" src={avatar} sx={{ width: 76, height: 76 }} />
                  <Box
                    sx={(theme) => ({
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bgcolor: 'rgba(0,0,0,.65)',
                      ...theme.applyStyles('dark', { bgcolor: 'rgba(255, 255, 255, .75)' }),
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    })}
                  >
                    <Stack sx={{ gap: 0.5, alignItems: 'center', color: 'secondary.lighter' }}>
                      <Camera style={{ fontSize: '1.5rem' }} />
                      <Typography variant="caption">Upload</Typography>
                    </Stack>
                  </Box>
                </FormLabel>
                <TextField
                  type="file"
                  id="change-avtar"
                  placeholder="Outlined"
                  variant="outlined"
                  sx={{ display: 'none' }}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedImage(e.target.files?.[0])}
                />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="personal-first-name">First Name</InputLabel>
                <TextField fullWidth defaultValue="Anshan" id="personal-first-name" placeholder="First Name" autoFocus />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="personal-first-name">Last Name</InputLabel>
                <TextField fullWidth defaultValue="Handgun" id="personal-first-name" placeholder="Last Name" />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="personal-location">Country</InputLabel>
                <TextField fullWidth defaultValue="New York" id="personal-location" placeholder="Location" />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="personal-zipcode">Zipcode</InputLabel>
                <TextField fullWidth defaultValue="956754" id="personal-zipcode" placeholder="Zipcode" />
              </Stack>
            </Grid>
            <Grid size={12}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="personal-location">Bio</InputLabel>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  defaultValue="Hello, I’m Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website, I create digital Products a more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at."
                  id="personal-location"
                  placeholder="Location"
                />
              </Stack>
            </Grid>
            <Grid size={12}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="personal-experience">Experiance</InputLabel>
                <Select fullWidth id="personal-experience" value={experience} onChange={handleChange} MenuProps={MenuProps}>
                  <MenuItem value="0">Start Up</MenuItem>
                  <MenuItem value="0.5">6 Months</MenuItem>
                  <MenuItem value="1">1 Year</MenuItem>
                  <MenuItem value="2">2 Years</MenuItem>
                  <MenuItem value="3">3 Years</MenuItem>
                  <MenuItem value="4">4 Years</MenuItem>
                  <MenuItem value="5">5 Years</MenuItem>
                  <MenuItem value="6">6 Years</MenuItem>
                  <MenuItem value="10">10+ Years</MenuItem>
                </Select>
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Grid container spacing={GRID_COMMON_SPACING}>
          <Grid size={12}>
            <MainCard title="Social Network">
              <Stack sx={{ gap: 1 }}>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <Button
                    size="small"
                    startIcon={<Google variant="Bold" />}
                    sx={{ color: 'error.main', '&:hover': { bgcolor: 'transparent' } }}
                  >
                    Google
                  </Button>
                  <Button color="error">Connect</Button>
                </Stack>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <Button
                    size="small"
                    startIcon={<Facebook variant="Bold" style={{ color: facebookColor }} />}
                    sx={{ color: facebookColor, '&:hover': { bgcolor: 'transparent' } }}
                  >
                    Facebook
                  </Button>
                  <Typography variant="subtitle1" sx={{ color: facebookColor }}>
                    Anshan Handgun
                  </Typography>
                </Stack>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <Button
                    size="small"
                    startIcon={<Apple variant="Bold" style={{ color: linkedInColor }} />}
                    sx={{ color: linkedInColor, '&:hover': { bgcolor: 'transparent' } }}
                  >
                    Apple
                  </Button>
                  <Button color="error">Connect</Button>
                </Stack>
              </Stack>
            </MainCard>
          </Grid>
          <Grid size={12}>
            <MainCard title="Contact Information">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="personal-phone">Phone Number</InputLabel>
                    <Stack direction="row" sx={{ gap: 2, justifyContent: 'space-between', alignItems: 'center' }}>
                      <Select defaultValue="1-876">
                        <MenuItem value="91">+91</MenuItem>
                        <MenuItem value="1-671">1-671</MenuItem>
                        <MenuItem value="36">+36</MenuItem>
                        <MenuItem value="225">(255)</MenuItem>
                        <MenuItem value="39">+39</MenuItem>
                        <MenuItem value="1-876">1-876</MenuItem>
                        <MenuItem value="7">+7</MenuItem>
                        <MenuItem value="254">(254)</MenuItem>
                        <MenuItem value="373">(373)</MenuItem>
                        <MenuItem value="1-664">1-664</MenuItem>
                        <MenuItem value="95">+95</MenuItem>
                        <MenuItem value="264">(264)</MenuItem>
                      </Select>
                      <PatternFormat
                        format="+1 (###) ###-####"
                        mask="_"
                        fullWidth
                        customInput={TextField}
                        placeholder="Phone Number"
                        defaultValue="8654239581"
                        onBlur={() => {}}
                        onChange={() => {}}
                      />
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="personal-email">Email Address</InputLabel>
                    <TextField type="email" fullWidth defaultValue="stebin.ben@gmail.com" id="personal-email" placeholder="Email Address" />
                  </Stack>
                </Grid>
                <Grid size={12}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="personal-email">Portfolio URL</InputLabel>
                    <TextField fullWidth defaultValue="https://anshan.dh.url" id="personal-url" placeholder="Portfolio URL" />
                  </Stack>
                </Grid>
                <Grid size={12}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="personal-address">Address</InputLabel>
                    <TextField
                      fullWidth
                      defaultValue="Street 110-B Kalians Bag, Dewan, M.P. New York"
                      id="personal-address"
                      placeholder="Address"
                    />
                  </Stack>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
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
