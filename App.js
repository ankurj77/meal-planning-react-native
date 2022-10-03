import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ItemsScreen from "./screens/ItemsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Categories">
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="Items" component={ItemsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
