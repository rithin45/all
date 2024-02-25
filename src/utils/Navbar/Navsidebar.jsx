import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, InputBase, Button, Divider, Badge, Input } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AppleIcon from '@mui/icons-material/Apple';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Login from '../../components/Login/Login';
import { Link, Navigate } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { LocalGroceryStore } from '@mui/icons-material';
import "./Style.css"






const Navsidebar = () => {
  const { Search } = Input;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [cartCount,setCartCount] = useState(0);
  const onSearch = (value) => {
    console.log(value)
    Navigate(`/search/${value}`)
  }



  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

useEffect(() => {
    // Get user's location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude } = position.coords;
          try {
            const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}`);
            const data = await response.json();
            setUserLocation({
              name: data.localityInfo.administrative[2].name
            });
          } catch (error) {
            console.error('Error getting user location:', error);
          }
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);
  const handleSignOut = () => {
    // Implement signout logic here
    console.log('User signed out');
  };
  


  return (
    <div>
      <AppBar position="static"  sx={{ backgroundColor:"#ED5945",boxShadow: 'none' }} >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <LocalGroceryStore sx={{
              fontSize: 26, color: '#FFFFFF'
            }} />
          <Typography
              variant='h6'
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: 'Cursive',
                color: '#FFFFFF',
                fontSize: '26px',
              }}
            >
              <b>Grocery Mart</b>
            </Typography>
          {/* <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}> */}
              
              <InputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                style={{ paddingLeft: '30px' }}
              />
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
            {/* </div>
            </div> */}
            {userLocation && (
            <Typography variant="subtitle1" color="inherit">
            <LocationOnIcon sx={{ marginRight: 1 }} /> {userLocation.name}
          </Typography>
          )}
          {/* <div style={{flexGrow:1}}>
            <IconButton edge="start" color='inherit' aria-label='shopping-cart' as={Link} to="/Addc">
              <Badge badgeConent={cartCount} color='secondary'><ShoppingCartIcon/></Badge>
            </IconButton>

          </div> */}
          {/* <Button color="inherit" onClick={handleSignOut} startIcon={<ExitToAppIcon />}>
              Sign Out
            </Button> */}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          {/* <ListItem as={Link} to="/nav">
            <ListItemIcon > 
              <SupervisedUserCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem> */}

          <ListItem as={Link} to="/sgn">
            <ListItemIcon>
              <LockOpenIcon/>
            </ListItemIcon>
            <ListItemText primary="Signup" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Category" />
          </ListItem>
          <ListItem as={Link} to="/Addp">
            <ListItemIcon>
              <LocalFloristIcon />
            </ListItemIcon>
            <ListItemText primary="Vegetables" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AppleIcon />
            </ListItemIcon>
            <ListItemText primary="Fruits" />
          </ListItem>
          
          <Divider />
          
          <ListItem as={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          
          <Divider />
          

          <ListItem as={Link} to="/Addc">
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Shopping Cart" />
          </ListItem >
          
          <Divider />
          
          <ListItem as={Link} to="/abt">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          
          <Divider />
          
          <ListItem  as={Link} to="/cont">
            <ListItemIcon>
              <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          
        </List>
      </Drawer>
      
    </div>
  );
};

export default Navsidebar;
