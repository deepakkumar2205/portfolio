import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import * as React from 'react';
import { scroller } from 'react-scroll';
import Context from '../Context/Context';

const actions = [
  { icon: <ContactPageIcon />,      name: 'ContactPageIcon', navText:'contact' },
  { icon: <ListAltIcon />,          name: 'Projects'       , navText:'projects' },
  { icon: <PsychologyIcon />,       name: 'Skills'         , navText:'skills' },
  { icon: <ContactEmergencyIcon />, name: 'About'          , navText:'about' },
  { icon: <HomeIcon />,             name: 'Home'           , navText:'home' },
];

export default function SpeedDialer() {
  const contextData = React.useContext(Context) ; 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box  >  
    {/* // <Box sx={{ height: 915, transform: 'translateZ(0px)', flexGrow: 1 }}> */}
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
          <SpeedDialAction 
         key={'Theme'}
         icon={contextData.theme ==="light" ?< NightlightRoundIcon/> :<WbSunnyIcon/>}
         tooltipTitle={contextData.theme ==="light"? "Dark Theme":"Light Theme"}
         onClick={()=>{ contextData.theme ==="light" ? contextData.setTheme("dark"): contextData.setTheme("light")
        }}  
        />
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={()=>{ 
              handleClose()
              scroller.scrollTo(action.navText , {
                smooth:true,
              })
            }}
          />
        ))}
      
      </SpeedDial>
    </Box>
  );
}