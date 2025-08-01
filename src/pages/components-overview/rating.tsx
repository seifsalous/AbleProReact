import { useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import ComponentHeader from 'components/cards/ComponentHeader';
import MainCard from 'components/MainCard';
import { GRID_COMMON_SPACING } from 'config';

import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';

// assets
import { EmojiHappy, Heart } from 'iconsax-reactjs';

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
};

// ==============================|| COMPONENTS - RATING ||============================== //

export default function ComponentRating() {
  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState(-1);

  const basicRatingCodeString = `<Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
<Rating name="read-only" value={3} readOnly />
<Rating name="disabled" value={4} disabled />
<Rating name="no-value" value={null} />`;

  const precisionRatingCodeString = `<Rating name="half-rating" defaultValue={3.6} precision={0.1} />
<Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />`;

  const hoverRatingCodeString = `<Box
  sx={{
    width: 200,
    display: 'flex',
    alignItems: 'center'
  }}
>
  <Rating
    name="hover-feedback"
    value={value}
    precision={0.5}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    onChangeActive={(event, newHover) => {
      setHover(newHover);
    }}
  />
  {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
</Box>`;

  const sizeRatingCodeString = `<Rating name="size-small" defaultValue={2} size="small" />
  <Rating name="size-medium" defaultValue={2} />
  <Rating name="size-large" defaultValue={2} size="large" />`;

  const customizationRatingCodeString = `<Rating name="customized-10" defaultValue={2} max={10} />
<Rating
  name="customized-color"
  defaultValue={2}
  precision={0.5}
  icon={<Heart variant="Bold" style={{ fontSize: '1.3rem', margin: 2 }} />}
  emptyIcon={<Heart style={{ fontSize: '1.3rem', margin: 2 }} />}
  sx={{ color: 'error.main' }}
/>
<Rating
  name="customized-color"
  defaultValue={3}
  icon={<EmojiHappy style={{ fontSize: '1.3rem', margin: 2 }} />}
  emptyIcon={<EmojiHappy style={{ fontSize: '1.3rem', margin: 2 }} />}
  sx={{ color: 'warning.main' }}
/>`;

  const halfRatingCodeString = `<Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
<Rating
  name="customized-color"
  defaultValue={3.5}
  precision={0.5}
  icon={<Star1 style={{ fontSize: '1.3rem', margin: 2 }} />}
  emptyIcon={<Star1 style={{ fontSize: '1.3rem', margin: 2 }} />}
  sx={{ color: 'warning.main' }}
/>`;

  return (
    <ComponentSkeleton>
      <ComponentHeader
        title="Rating"
        caption="Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own."
        directory="src/pages/components-overview/rating"
        link="https://mui.com/material-ui/react-rating/"
      />
      <ComponentWrapper>
        <Grid container spacing={GRID_COMMON_SPACING}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack sx={{ gap: GRID_COMMON_SPACING }}>
              <MainCard title="Basic" codeHighlight codeString={basicRatingCodeString}>
                <Grid container spacing={1}>
                  <Grid size={{ xs: 5, sm: 3 }}>
                    <Typography variant="h6">Controlled</Typography>
                  </Grid>
                  <Grid size={{ xs: 7, sm: 9 }}>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 5, sm: 3 }}>
                    <Typography variant="h6">Read Only</Typography>
                  </Grid>
                  <Grid size={{ xs: 7, sm: 9 }}>
                    <Rating name="read-only" value={3} readOnly />
                  </Grid>
                  <Grid size={{ xs: 5, sm: 3 }}>
                    <Typography variant="h6">Disabled</Typography>
                  </Grid>
                  <Grid size={{ xs: 7, sm: 9 }}>
                    <Rating name="disabled" value={4} disabled />
                  </Grid>
                  <Grid size={{ xs: 5, sm: 3 }}>
                    <Typography variant="h6">No rating</Typography>
                  </Grid>
                  <Grid size={{ xs: 7, sm: 9 }}>
                    <Rating name="no-value" value={null} />
                  </Grid>
                </Grid>
              </MainCard>
              <MainCard title="Precision" codeString={precisionRatingCodeString}>
                <Grid container spacing={1}>
                  <Grid size={12}>
                    <Rating name="half-rating" defaultValue={3.6} precision={0.1} />
                  </Grid>
                  <Grid size={12}>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                  </Grid>
                </Grid>
              </MainCard>
              <MainCard title="Hover Feedback" codeString={hoverRatingCodeString}>
                <Box
                  sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />
                  {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
                </Box>
              </MainCard>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack sx={{ gap: GRID_COMMON_SPACING }}>
              <MainCard title="Sizes" codeString={sizeRatingCodeString}>
                <Grid container spacing={1}>
                  <Grid size={12}>
                    <Rating name="size-small" defaultValue={2} size="small" />
                  </Grid>
                  <Grid size={12}>
                    <Rating name="size-medium" defaultValue={2} />
                  </Grid>
                  <Grid size={12}>
                    <Rating name="size-large" defaultValue={2} size="large" />
                  </Grid>
                </Grid>
              </MainCard>
              <MainCard title="Customization" codeString={customizationRatingCodeString}>
                <Grid container spacing={1}>
                  <Grid size={12}>
                    <Rating name="customized-10" defaultValue={2} max={10} />
                  </Grid>
                  <Grid size={12}>
                    <Rating
                      name="customized-color-heart"
                      defaultValue={2}
                      icon={<Heart variant="Bold" style={{ fontSize: '1.3rem', margin: 2 }} />}
                      emptyIcon={<Heart style={{ fontSize: '1.3rem', margin: 2 }} />}
                      sx={{ color: 'error.main' }}
                    />
                  </Grid>
                  <Grid size={12}>
                    <Rating
                      name="customized-color-smily"
                      defaultValue={3}
                      icon={<EmojiHappy style={{ fontSize: '1.3rem', margin: 2 }} />}
                      emptyIcon={<EmojiHappy style={{ fontSize: '1.3rem', margin: 2 }} />}
                      sx={{ color: 'warning.main' }}
                    />
                  </Grid>
                </Grid>
              </MainCard>
              <MainCard title="Half" codeString={halfRatingCodeString}>
                <Grid container spacing={1}>
                  <Grid size={12}>
                    <Rating name="half-rating-read-custom" defaultValue={2.5} precision={0.5} />
                  </Grid>
                </Grid>
              </MainCard>
            </Stack>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  );
}
