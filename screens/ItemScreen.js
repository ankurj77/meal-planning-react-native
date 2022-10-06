import {Image, Text, View, ScrollView, StyleSheet, FlatList} from "react-native";
import {useRoute} from "@react-navigation/native";
import {MEALS} from "../data/dummy-data";
import {useLayoutEffect} from "react";
import {storeItemVisited} from "../backend/ItemVisits";

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
    storeItemVisited(item);
  }, [itemID, navigation])

  return (
    <ScrollView style={styles.innerContainer}>
      <View>
        <Image source={{uri: item.imageUrl}} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.details}>
        {item.isVegetarian ? <Text style={styles.detailsItem}>Vegetarian</Text> : <></>}
        {item.isVegan ? <Text style={styles.detailsItem}>Vegan</Text> : <></>}
        {item.isLactoseFree ? <Text style={styles.detailsItem}>Lactose Free</Text> : <></>}
        {item.isGlutenFree ? <Text style={styles.detailsItem}>Gluten Free</Text> : <></>}
        <Text style={styles.title}>Ingredients</Text>
        {
          item.ingredients.map((itemData, index) => {
            return (
              <View key={index}>
                <Text style={styles.detailsItemList}>{itemData}</Text>
              </View>
            );
          })
        }
        <Text style={styles.title}>Steps</Text>
        {
          item.steps.map((itemData, index) => {
            return (
              <View key={index}>
                <Text style={styles.detailsItemList}>{itemData}</Text>
              </View>
            );
          })
        }
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
    alignItems: "stretch",
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
    padding: 6,
    marginHorizontal: 4,
    marginVertical: 2,
    color: 'black',
    fontSize: 10,
  }
});