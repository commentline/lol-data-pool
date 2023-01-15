import axios from "axios";

const fetchItems = async () => {
  const { data } = await
    axios.get("http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/item.json");
  return { ...data.data };
}

export default fetchItems;


