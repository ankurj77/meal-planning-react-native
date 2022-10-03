import {FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import GridTile from "../components/GridTile";

function renderItem(itemData) {
  return (<GridTile title={itemData.item.title} color={itemData.item.color} />)
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;