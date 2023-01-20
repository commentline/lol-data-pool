import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, Grid, Typography } from '@mui/material';
import Toast from './Toast';

const ChampionCards = ({championListItems, favListItems, handleUpdateToFavoriteList}) => {

  return (
    <div>
      <Grid container columns={18} rowSpacing={2} columnSpacing={2}>
        {championListItems.map(champion => (
          <Grid item xs={3} md={2} key={champion.key}>
            <Card style={{ height: "255px" }}>
              <CardMedia
                component="img"
                alt="Champion Image"
                height="100"
                image={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champion.id}.png`}
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {champion.name}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  {champion.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component={RouterLink}
                  to={`/champions/${champion.name.replace(/\s/g, "").replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase()}`}
                  sx={{ backgroundColor: 'darkgray' }}
                >Detail</Button>{
                  favListItems.find(favItem => favItem.id === champion.id)
                    ? (<Checkbox checkedIcon={<StarIcon />} key={champion.id} defaultChecked onChange={() => {
                      handleUpdateToFavoriteList(champion);
                      toast.warn(`${champion.id} removed your fovorite list`)
                    }} />)
                    : (<Checkbox icon={<StarBorderIcon />} onChange={() => {
                      handleUpdateToFavoriteList(champion);
                      toast.info(`${champion.id} added your fovorite list`);
                    }} />)
                }
                <Toast />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ChampionCards;