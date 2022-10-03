import {FlatList, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import ItemScreen from "./ItemScreen";
import {MEALS} from "../data/dummy-data";

function ItemsScreen({navigation}) {
  const route = useRoute();
  const categoryID = route.params.categoryID;
  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryID) >= 0;
  });

  function renderItem(itemData) {
    return (
      <ItemScreen title={itemData.item.title} />
    );
  }

  return (
    <View>
      <FlatList data={displayedMeals} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
}

export default ItemsScreen;