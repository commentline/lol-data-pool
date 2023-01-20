import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateToFavoriteList } from '../store/actions/favListActions';
import { setChampionList } from '../store/actions/championListActions';
import ChampionCards from '../components/ChampionCards';

const Champions = () => {

  const { favListItems } = useSelector(state => state.favListReducer);
  const { championListItems } = useSelector(state => state.championListReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const getChampionList = async () => {
      dispatch(setChampionList());
    }
    getChampionList();
  }, [dispatch]);

  const handleUpdateToFavoriteList = champion => {
    dispatch(updateToFavoriteList(champion));
  }

  return (
    <div>
      <ChampionCards 
        championListItems={championListItems} 
        favListItems={favListItems} 
        handleUpdateToFavoriteList={handleUpdateToFavoriteList} />
    </div>
  )
}

export default Champions;