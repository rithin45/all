import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation({nowin}) {
  const [value, setValue] = React.useState(0);
  
  React.useEffect(()=>{
    if(nowin=="wishlist"){
      setValue(2)
    }
  })
  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, zIndex: 1000 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction component={Link} to="/home" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction component={Link} to="/categories" label="Categories" icon={<GridViewRoundedIcon />} />
        {/* <BottomNavigationAction component={Link} to="/favorites" label="Favorites" icon={<FavoriteIcon />} /> */}
        <BottomNavigationAction component={Link} to="/Order" label="Orders" icon={<AssignmentTurnedInIcon />} />
      </BottomNavigation>
    </Box>
  );
}