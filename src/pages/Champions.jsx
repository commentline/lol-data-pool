import React, { useEffect, useState } from 'react';
import { fetchChampionsList } from '../services/championsService';
import { useDispatch } from 'react-redux';
import { updateToCard } from '../store/actions/cardActions';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const Champions = () => {

  const [championsList, setChampionsList] = useState([]);

  useEffect(() => {
    const fetchChampionsData = async () => {
      const champions = await fetchChampionsList();
      setChampionsList(Object.values(champions));
    };
    fetchChampionsData();
  }, []);
  console.log(championsList);

  const dispatch = useDispatch();

  const handleUpdateToCard = (champion) => {
    dispatch(updateToCard(champion))
  }
  //const {cardItems} = useSelector(state => state.cardReducer);
  //console.log(cardItems)

  return (
    <Grid container columns={18} rowSpacing={2} columnSpacing={2}>
      {championsList.map(champion => (
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
                onClick={() => handleUpdateToCard(champion)}
                component={RouterLink}
                to={`/champions/${champion.name.replace(/\s/g, "").replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase()}`}
                sx={{ backgroundColor: 'darkgray' }}
              >Detail</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Champions;