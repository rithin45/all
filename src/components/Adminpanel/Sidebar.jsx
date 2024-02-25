import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemText, Toolbar } from '@mui/material';

const Sidebar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    // <div className="sidebar">
    <div>
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          </Toolbar>
      </AppBar>
        {/* <ul>
        <a href='/home'><li>HOME</li></a>
       </ul>
        Import
       <ul>
        <a href='/s'><li>Category</li></a>
        <a href='/c'><li>Add Products</li></a>
       </ul>
       Checkout
       <ul>
       <a href="/sview"><li>Added Categories</li></a>
       <a href="/viewdetails"><li>View Products</li></a>
      
      </ul> */}

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          <ListItem as={Link} to="/home">
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem as={Link} to="/s" >
            <ListItemText primary="Category" />
          </ListItem>
          <ListItem as={Link} to="/c">
            <ListItemText primary="Added Products" />
          </ListItem>
          <ListItem as={Link} to="/sview">
            <ListItemText primary="Added Categories" />
          </ListItem>
          <ListItem as={Link} to="/viewdetails">
            <ListItemText primary="View Products" />
          </ListItem>
        </List>
      </Drawer>
      
    </div>
  );
};

export default Sidebar;