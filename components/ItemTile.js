import {View, Image, Text, StyleSheet, Pressable, Platform} from "react-native";

function ItemTile({item, onPress}) {
  return (
    <View style={styles.item}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [pressed ? styles.itemPressed: null]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: item.imageUrl}} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsItem}>{item.duration}min</Text>
            <Text style={styles.detailsItem}>{item.complexity.toUpperCase()}</Text>
            <Text style={styles.detailsItem}>{item.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default ItemTile;

const styles = StyleSheet.create({
  item: {
    margin: 16,
    borderRadius: 16,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  itemPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  }
});