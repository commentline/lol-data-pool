import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateToFavoriteList } from '../store/actions/favListActions';
import ChampionCards from '../components/ChampionCards';

const FavoriteChampions = () => {

  const { favListItems } = useSelector(state => state.favListReducer);

  const dispatch = useDispatch();
  const handleUpdateToFavoriteList = champion => {
    dispatch(updateToFavoriteList(champion));
  }

  return (
    <div>
      <ChampionCards
        championListItems={favListItems}
        favListItems={favListItems}
        handleUpdateToFavoriteList={handleUpdateToFavoriteList} />
    </div>
  )
}

export default FavoriteChampions;
