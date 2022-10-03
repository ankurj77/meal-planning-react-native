import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <View contentContainerStyle={styles.container}>
      <CategoriesScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});