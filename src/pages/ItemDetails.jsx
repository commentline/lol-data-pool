import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setItemList } from '../store/actions/itemListActions';

const ItemDetails = () => {

  const { itemPathDetails } = useParams();
  const { itemListItems } = useSelector(state => state.itemListReducer);

  const [currentItem] = itemListItems.filter(item => item.name.replace(/\s/g, "").toLowerCase() === itemPathDetails);

  const dispatch = useDispatch();
  useEffect(() => {
    const getItemList = async () => {
      dispatch(setItemList());
    }
    getItemList();
  }, [dispatch]);

  return (
    <div>
      {currentItem ?
        (
          <Grid container >
            <Grid item sm={3}>
              <Box
                component="img"
                sx={{
                  width: 200,
                  height: 200
                }}
                alt="Item Image"
                src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${currentItem.image.full}`}
              />
            </Grid>
            <Grid item sm={9}>
              <Box p={2} width={'100%'} color="secondary.contrastText">
                {currentItem.name.toUpperCase()}
              </Box>
              <Box p={2} width={'100%'} color="secondary.contrastText">
                {currentItem.plaintext}
              </Box>
            </Grid>
          </Grid>
        ) : null}
    </div>
  )
}

export default ItemDetails;