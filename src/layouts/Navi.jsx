import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setChampionList } from '../store/actions/championListActions';
import { setItemList } from '../store/actions/itemListActions';

const Navi = () => {

  const { championListItems } = useSelector(state => state.championListReducer);
  const { itemListItems } = useSelector(state => state.itemListReducer);
  const { favListItems } = useSelector(state => state.favListReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const getChampionList = async () => {
      dispatch(setChampionList());
    };
    const getItemList = async () => {
      dispatch(setItemList());
    };
    getChampionList();
    getItemList();
  }, [dispatch]);

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
              CHAMPIONS {`(${championListItems.length})`}
            </Typography>
          </Button>
          <Button component={RouterLink} to="/items">
            <Typography variant="h7" >
              ITEMS {`(${itemListItems.length})`}
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