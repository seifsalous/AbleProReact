import { useState, ChangeEvent } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// project-imports
import ComponentHeader from 'components/cards/ComponentHeader';
import MainCard from 'components/MainCard';
import { GRID_COMMON_SPACING } from 'config';

import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';

// ==============================|| COMPONENTS - CHECKBOX ||============================== //

export default function ComponentCheckbox() {
  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel label="Child 1" control={<Checkbox checked={checked[0]} onChange={handleChange2} />} />
      <FormControlLabel label="Child 2" control={<Checkbox checked={checked[1]} onChange={handleChange3} />} />
    </Box>
  );

  const basicCheckboxCodeString = `<Checkbox />
<Checkbox defaultChecked />
<Checkbox defaultChecked />
<Checkbox defaultChecked disabled />
<Checkbox disabled />`;

  const colorCheckboxCodeString = `<Checkbox />
<Checkbox defaultChecked color="secondary" />
<Checkbox defaultChecked color="success" />
<Checkbox defaultChecked color="warning" />
<Checkbox defaultChecked color="info" />
<Checkbox defaultChecked color="error" />`;

  const sizeCheckboxCodeString = `<Checkbox defaultChecked />
<Checkbox defaultChecked className="size-medium" />
<Checkbox defaultChecked className="size-large" />`;

  const labelCheckboxCodeString = `<FormControl component="fieldset">
  <FormGroup aria-label="position" row>
    <FormControlLabel value="top" control={<Checkbox />} label="Top" labelPlacement="top" />
    <FormControlLabel
      value="start"
      control={<Checkbox defaultChecked />}
      label="Start"
      labelPlacement="start"
      sx={{ mr: 1 }}
    />
    <FormControlLabel value="bottom" control={<Checkbox />} label="Bottom" labelPlacement="bottom" />
    <FormControlLabel value="end" control={<Checkbox defaultChecked />} label="End" labelPlacement="end" sx={{ ml: 1 }} />
  </FormGroup>
</FormControl>`;

  const indeterminateCheckboxCodeString = `<>
  <FormControlLabel
    label="Parent"
    control={
      <Checkbox checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />
    }
  />
  <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
    <FormControlLabel label="Child 1" control={<Checkbox checked={checked[0]} onChange={handleChange2} />} />
    <FormControlLabel label="Child 2" control={<Checkbox checked={checked[1]} onChange={handleChange3} />} />
  </Box>
</>`;

  return (
    <ComponentSkeleton>
      <ComponentHeader
        title="Checkbox"
        caption="Checkboxes allow the user to select one or more items from a set."
        directory="src/pages/components-overview/checkbox"
        link="https://mui.com/material-ui/react-checkbox/"
      />
      <ComponentWrapper>
        <Grid container spacing={GRID_COMMON_SPACING}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack sx={{ gap: GRID_COMMON_SPACING }}>
              <MainCard title="Basic" codeHighlight codeString={basicCheckboxCodeString}>
                <>
                  <Checkbox />
                  <Checkbox defaultChecked />
                  <Checkbox defaultChecked />
                  <Checkbox defaultChecked disabled />
                  <Checkbox disabled />
                </>
              </MainCard>
              <MainCard title="Size" codeString={sizeCheckboxCodeString}>
                <>
                  <Checkbox defaultChecked className="size-small" />
                  <Checkbox defaultChecked />
                  <Checkbox defaultChecked className="size-large" />
                </>
              </MainCard>
              <MainCard title="Colors" codeString={colorCheckboxCodeString}>
                <>
                  <Checkbox />
                  <Checkbox defaultChecked color="secondary" />
                  <Checkbox defaultChecked color="success" />
                  <Checkbox defaultChecked color="warning" />
                  <Checkbox defaultChecked color="info" />
                  <Checkbox defaultChecked color="error" />
                </>
              </MainCard>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack sx={{ gap: GRID_COMMON_SPACING }}>
              <MainCard title="Label Placement" codeString={labelCheckboxCodeString}>
                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel value="top" control={<Checkbox />} label="Top" labelPlacement="top" />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox defaultChecked />}
                      label="Start"
                      labelPlacement="start"
                      sx={{ mr: 1 }}
                    />
                    <FormControlLabel value="bottom" control={<Checkbox />} label="Bottom" labelPlacement="bottom" />
                    <FormControlLabel value="end" control={<Checkbox defaultChecked />} label="End" labelPlacement="end" sx={{ ml: 1 }} />
                  </FormGroup>
                </FormControl>
              </MainCard>
              <MainCard title="Indeterminate" codeString={indeterminateCheckboxCodeString}>
                <>
                  <FormControlLabel
                    label="Parent"
                    control={
                      <Checkbox checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />
                    }
                  />
                  {children}
                </>
              </MainCard>
            </Stack>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  );
}
