import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react";

import CategoryScreen from "./screen/CategoryScreen";
import MealOverViewScreen from "./screen/MealOverViewScreen";
import MealDetailScreen from "./screen/MealDetailScreen";
import FavoriteScreen from "./screen/FavoriteScreen";
//import FavoritesContextProvider from "./store/context/favorite-context";
import { store } from "./store/redux/store";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#764343" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#5c4747" },
        drawerContentStyle: { backgroundColor: "#764343" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#d47373",
        drawerActiveBackgroundColor: "#586dbb",
      }}
    >
      <Drawer.Screen
        name="category"
        component={CategoryScreen}
        options={{
          title: "All Catogaries",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="list"
              size={size}
              color={focused ? "#7cc" : "#ccc"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="favorite"
        component={FavoriteScreen}
        options={{
          title: "Favorite",
          drawerIcon: ({ size, color }) => <Ionicons name="star" size={24} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <NavigationContainer>
        {/* <FavoritesContextProvider> */}
        <Provider store={store}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#764343" },
              headerTintColor: "white",
              cardStyle: { backgroundColor: "#5c4747" },
            }}
          >
            <Stack.Screen
              name="mealCategories"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="mealOverView" component={MealOverViewScreen} />
            <Stack.Screen
              name="mealDetailScreen"
              component={MealDetailScreen}
              options={{ title: "Meal Details" }}
            />
          </Stack.Navigator>
        </Provider>
        {/* </FavoritesContextProvider> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
