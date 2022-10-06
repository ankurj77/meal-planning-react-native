import {View, Text, StyleSheet, FlatList} from "react-native";
import {useLayoutEffect, useState} from "react";
import {getItemsVisited} from "../backend/ItemVisits";
import ItemTile from "../components/ItemTile";

function RecentVisitsScreen({navigation}) {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [error, setError] = useState("");

  useLayoutEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getItemsVisited()
      .then(r => {
        setDisplayedItems(r);
        setError("");
      })
      .catch(r => {
        console.log("promise error", r);
        setError(r.message);
      });
    });

    return unsubscribe;
  }, [navigation]);

  function renderItem(itemData) {
    function pressHandler() {
      alert("press not allowed");
    }

    return (
      <ItemTile item={itemData.item} onPress={pressHandler} />
    );
  }

  return (
    <View style={styles.container}>
      {(error) ?
        (<Text style={[styles.text, styles.error]}>{error}</Text>) :
        (displayedItems.length == 0) ?
          (<Text style={styles.text}>Nothing visited yet</Text>) :
          (<FlatList data={displayedItems} renderItem={renderItem} keyExtractor={(item) => item.id} />)
      }
    </View>
  );
}

export default RecentVisitsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  error: {
    color: "orange",
  }
});