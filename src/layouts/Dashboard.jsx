import React from 'react';
import Navi from './Navi';
import Home from '../pages/Home';
import Champions from '../pages/Champions';
import Items from '../pages/Items'
import ItemDetails from '../pages/ItemDetails';
import { Route, Routes } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import ChampionDetails from '../pages/ChampionDetails';
import Redirect from '../pages/Redirect';

const Dashboard = () => {

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Navi />
          </Grid>
          <Grid item xs={12}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/champions" element={<Champions />} />
              <Route exact path="/champions/:championPathDetails" element={<ChampionDetails />} />
              <Route exact path="/items" element={<Items />} />
              <Route exact path="/items/:itemPathDetails" element={<ItemDetails />} />
              <Route path='*' element={<Redirect />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Dashboard;