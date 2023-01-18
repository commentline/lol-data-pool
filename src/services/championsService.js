import axios from "axios";

export const fetchChampionList = async () => {
  try{
    const { data } = await
    axios.get("http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json");
    return { ...data.data };
  }catch (err) {
    console.log(err.message);
  } 
}

export const fetchChampionDetail = async championName => {
  try{
    const { data } = await
    axios.get(`http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/${championName}.json`);
    return { ...data.data };
  }catch (err) {
    console.log(err.message);
  } 
}
