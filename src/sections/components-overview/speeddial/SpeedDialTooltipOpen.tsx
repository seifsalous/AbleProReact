import { useState } from 'react';

// material-ui
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import MainCard from 'components/MainCard';

// assets
import { Copy, Heart, Printer, Save2, Share } from 'iconsax-reactjs';

// =============================|| SPEEDDIAL - PERSISTENT ICON ||============================= //

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = useState(false);

  // fab action options
  const actions = [
    { icon: <Copy />, name: 'Copy' },
    { icon: <Save2 />, name: 'Save' },
    { icon: <Printer />, name: 'Print' },
    { icon: <Share />, name: 'Share' },
    { icon: <Heart />, name: 'Like' }
  ];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [hidden, setHidden] = useState(false);
  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const persistSpeeddialCodeString = `<Box sx={{ height: 430, transform: 'translateZ(0px)', flexGrow: 1 }}>
  <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
  <Backdrop open={open} />
  <SpeedDial
    ariaLabel="SpeedDial tooltip example"
    hidden={hidden}
    icon={<SpeedDialIcon />}
    onClose={handleClose}
    onOpen={handleOpen}
    open={open}
    sx={{ position: 'absolute', bottom: 16, right: 16 }}
  >
    {actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={<Typography variant="subtitle1">{action.name}</Typography>}
        tooltipOpen
        onClick={handleClose}
      />
    ))}
  </SpeedDial>
</Box>`;

  return (
    <MainCard title="Persistent Icon" codeString={persistSpeeddialCodeString}>
      <Box sx={{ height: 430, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          sx={{ position: 'absolute', bottom: 16, right: 16, '& .MuiSpeedDialAction-fab': { bgcolor: 'secondary.200' } }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={<Typography variant="subtitle1">{action.name}</Typography>}
              tooltipOpen
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box>
    </MainCard>
  );
}
