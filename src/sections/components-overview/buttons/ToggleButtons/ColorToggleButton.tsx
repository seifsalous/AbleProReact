import { useState, MouseEvent } from 'react';

// material-ui
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// assets
import { TextalignCenter, TextalignJustifycenter, TextalignLeft, TextalignRight } from 'iconsax-reactjs';

// ==============================|| TOGGLE BUTTON - COLOR ||============================== //

export default function ColorToggleButton() {
  const [alignment, setAlignment] = useState<string | null>('left');

  const handleAlignment = (event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
      <ToggleButton value="left" aria-label="left aligned">
        <TextalignLeft />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <TextalignCenter />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <TextalignRight />
      </ToggleButton>
      <ToggleButton value="list" aria-label="list">
        <TextalignJustifycenter />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
