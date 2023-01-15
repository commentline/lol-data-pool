import axios from "axios";

export const fetchChampionsList = async () => {
  const { data } = await
    axios.get("http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json");
  return { ...data.data };
}

export const fetchChampionDetail = async championName => {
  const { data } = await
    axios.get(`http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/${championName}.json`);
  return { ...data.data };
}
