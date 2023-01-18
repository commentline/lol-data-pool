import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { updateToFavoriteList } from '../store/actions/favListActions';
import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, Grid, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import StarIcon from '@mui/icons-material/Star';

const FavoriteChampions = () => {

  const { favListItems } = useSelector(state => state.favListReducer);

  const dispatch = useDispatch();
  const handleUpdateToFavoriteList = champion => {
    dispatch(updateToFavoriteList(champion));
  }

  return (
    <div>
      <Grid container columns={18} rowSpacing={2} columnSpacing={2}>
        {favListItems.map(favItem => (
          <Grid item xs={3} md={2} key={favItem.key}>
            <Card style={{ height: "255px" }}>
              <CardMedia
                component="img"
                alt="Champion Image"
                height="100"
                image={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${favItem.id}.png`}
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {favItem.name}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  {favItem.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component={RouterLink}
                  to={`/champions/${favItem.name.replace(/\s/g, "").replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase()}`}
                  sx={{ backgroundColor: 'darkgray' }}
                >Detail</Button>
                <Checkbox
                  defaultChecked
                  checkedIcon={<StarIcon />}
                  onChange={() => {
                    handleUpdateToFavoriteList(favItem);
                    toast.warn(`${favItem.id} removed your fovorite list`)
                  }} />{
                }
                <ToastContainer
                  position="bottom-right"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default FavoriteChampions;
