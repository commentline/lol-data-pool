import axios from "axios";

const fetchItems = async () => {
  try{
    const { data } = await
    axios.get("http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/item.json");
    return { ...data.data };
  }catch (err) {
    console.log(err.message);
  } 
}

export default fetchItems;


