import {FlatList, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import ItemTile from "../components/ItemTile";
import {useLayoutEffect} from "react";

function ItemsScreen({navigation}) {
  const route = useRoute();
  const categoryID = route.params.categoryID;

  const displayedItems = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryID
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryID, navigation])

  function renderItem(itemData) {
    function pressHandler() {
      navigation.navigate("Item", {itemID: itemData.item.id});
    }

    return (
      <ItemTile item={itemData.item} onPress={pressHandler} />
    );
  }

  return (
    <View>
      <FlatList data={displayedItems} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
}

export default ItemsScreen;