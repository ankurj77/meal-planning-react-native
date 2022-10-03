import {Text, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {MEALS} from "../data/dummy-data";

function ItemScreen() {
  const route = useRoute();
  const itemID = route.params.itemID;

  const item = MEALS.filter((item) => {
    return item.id === itemID;
  }).at(0);

  return (
    <View>
      <Text>{item.ingredients}</Text>
      <Text>{item.steps}</Text>
    </View>
  );
}

export default ItemScreen;