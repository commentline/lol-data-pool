import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const Navi = () => {

  const { favListItems } = useSelector(state => state.favListReducer);

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Button component={RouterLink} to="/" sx={{ backgroundColor: 'darkgray' }}>
            <Typography variant="h6" >
              LOL DATA POOL
            </Typography>
          </Button>
          <Button component={RouterLink} to="/champions">
            <Typography variant="h7" >
              CHAMPIONS
            </Typography>
          </Button>
          <Button component={RouterLink} to="/items">
            <Typography variant="h7" >
              ITEMS
            </Typography>
          </Button>
          <Button component={RouterLink} to="/favoritechampions">
            <Typography variant="h7" >
              FAVORITES {`(${favListItems.length})`}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navi;