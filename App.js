import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ItemsScreen from "./screens/ItemsScreen";
import ItemScreen from "./screens/ItemScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'}
          }}
        >
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="Items" component={ItemsScreen} />
          <Stack.Screen name="Item" component={ItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
