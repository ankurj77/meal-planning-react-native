import {Image, Text, View, ScrollView, StyleSheet, FlatList} from "react-native";
import {useRoute} from "@react-navigation/native";
import {MEALS} from "../data/dummy-data";
import {useLayoutEffect} from "react";

function ItemScreen({navigation}) {
  const route = useRoute();
  const itemID = route.params.itemID;

  const item = MEALS.find((item) => {
    return item.id === itemID;
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item.title,
    });
  }, [itemID, navigation])

  return (
    <ScrollView horizontal={false} style={styles.innerContainer}>
      <View>
        <Image source={{uri: item.imageUrl}} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsItem}>Vegetarian: {item.isVegetarian ? "Yes" : "No"}</Text>
        <Text style={styles.detailsItem}>Vegan: {item.isVegan ? "Yes" : "No"}</Text>
        <Text style={styles.detailsItem}>Lactose Free: {item.isLactoseFree ? "Yes" : "No"}</Text>
        <Text style={styles.detailsItem}>Gluten Free: {item.isGlutenFree ? "Yes" : "No"}</Text>
        <Text style={styles.detailsItem}>Ingredients:</Text>
        <FlatList
          data={item.ingredients}
          keyExtractor={(item) => item.id}
          renderItem={(item) =>
            <Text style={styles.detailsItemList}>{item.item}</Text>}
        />
        <Text style={styles.detailsItem}>Steps:</Text>
        <FlatList
          data={item.steps}
          keyExtractor={(item) => item.id}
          renderItem={(item) =>
            <Text style={styles.detailsItemList}>{item.item}</Text>}
        />
      </View>
    </ScrollView>
  );
}

export default ItemScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    color: 'white',
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  innerContainer: {
    flex: 1,
    marginBottom: 10,
  },
  details: {
    flexDirection: "column",
    alignItems: "baseline",
    justifyContent: "center",
    padding: 8,
    marginBottom: 20,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: 'white',
  },
  detailsItemList: {
    backgroundColor: '#ccc',
    padding: 2,
    marginHorizontal: 4,
    marginVertical: 2,
    color: 'black',
    fontSize: 10,
  }
});