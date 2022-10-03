import {FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import GridTile from "../components/GridTile";

function CategoriesScreen({navigation}) {
  function renderItem(itemData) {
    function pressHandler() {
      navigation.navigate("Items", {categoryID: itemData.item.id});
    }

    return (
      <GridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    )
  }

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