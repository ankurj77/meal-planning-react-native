import axios from 'axios';

const BACKEND_URL = "https://react-native-learning-60eec-default-rtdb.europe-west1.firebasedatabase.app/ItemVisits.json";

export async function storeItemVisited(item) {
  await axios.post(BACKEND_URL, item);
}

export async function getItemsVisited() {
  const response = await axios.get(BACKEND_URL);
  const items = [];

  for (const key in response.data) {
    const obj = response.data[key];
    const itemObj = {
      id: key,
      title: obj.title,
      imageUrl: obj.imageUrl,
      duration: obj.duration,
      complexity: obj.complexity,
      affordability: obj.affordability,
    }
    items.push(itemObj);
  }
  console.log(items);
  return items;
}