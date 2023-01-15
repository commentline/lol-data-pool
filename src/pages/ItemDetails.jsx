import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import fetchItems from '../services/itemsService';

const ItemDetails = () => {

  const { itemPathDetails } = useParams();

  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    const fetchItemsData = async () => {
      const items = await fetchItems();
      setItemsList(Object.values(items));
    };
    fetchItemsData();
  }, []);

  let [currentItem] = itemsList.filter(item => item.name.replace(/\s/g, "").toLowerCase() === itemPathDetails);
  console.log(currentItem);
  return (
    <div>
      {
        currentItem ?
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
          ) : null
      }
    </div>
  )
}

export default ItemDetails;