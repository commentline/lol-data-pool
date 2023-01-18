import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setItemList } from '../store/actions/itemListActions';

const Items = () => {

  const { itemListItems } = useSelector(state => state.itemListReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const getItemList = async () => {
      dispatch(setItemList());
    };
    getItemList();
  }, [dispatch]);

  return (
    <div>
      <Grid container columns={24} rowSpacing={2} columnSpacing={2} >
        {itemListItems.map((item, index) => (
          <Grid item xs={4} md={3} lg={2} key={index} >
            <Card style={{ height: "210px" }}>
              <CardMedia
                component="img"
                alt="item Image"
                height="75"
                image={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${item.image.full}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {item.name}
                </Typography>
                {/* <Typography variant="body1" color="text.secondary">
                  {item.plaintext}
                </Typography> */}
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component={RouterLink}
                  to={`/items/${item.name.replace(/\s/g, "").toLowerCase()}`}
                  sx={{ backgroundColor: 'darkgray' }}
                >Detail</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Items;