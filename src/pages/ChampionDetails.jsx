import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setChampionDetail } from '../store/actions/championDetailActions';

const ChampionDetails = () => {

  const { championPathDetails } = useParams();
  const championName = championPathDetails[0].toUpperCase() + championPathDetails.slice(1);
  
  const { championDetailItems } = useSelector(state => state.championDetailReducer);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getList = async () => {
      dispatch(setChampionDetail(championName));
    }
    getList();
  }, [dispatch, championName]);

  return (
    <div>
      <Grid container>
        <Grid item xs={3.5}>
          <Box
            component="img"
            sx={{
              width: 300,
              height: 475
            }}
            alt="Champion Image"
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`}
          />
        </Grid>
        {championDetailItems.map(champion =>
        (<Grid item xs={8.5} key={champion.id}>
          <Box display="flex" flexDirection="column" bgcolor="gray">
            <Box display="flex" flexDirection="column">
              <Box display="flex" height={70}>
                <Box p={1}
                  width="25%"
                  color="primary.contrastText"
                  component="img"
                  sx={{
                    width: 50,
                    height: 50
                  }}
                  alt="Champion Image"
                  src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/${champion.passive.image.full}`}>
                </Box>
                <Box p={2} width={'100%'} color="secondary.contrastText">
                  {champion.passive.description}
                </Box>
              </Box>
              {champion.spells.map((spell, index) => (
                <Box display="flex" height={70} key={index}>
                  <Box p={1}
                    width="25%"
                    color="primary.contrastText"
                    component="img"
                    sx={{
                      width: 50,
                      height: 50
                    }}
                    alt="Champion Image"
                    src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${spell.image.full}`} >
                  </Box>
                  <Box p={2} width={'100%'} color="secondary.contrastText">
                    {spell.description}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>))}
      </Grid>
    </div>
  )
}

export default ChampionDetails;