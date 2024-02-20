import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CategoryScreen from "./screen/CategoryScreen";
import MealOverViewScreen from "./screen/MealOverViewScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#764343" },
            headerTintColor: "white",
            cardStyle: { backgroundColor: "#5c4747" },
          }}
        >
          <Stack.Screen
            name="mealCategories"
            component={CategoryScreen}
            options={{ title: "Meal Categories" }}
          />
          <Stack.Screen
            name="mealOverView"
            component={MealOverViewScreen}
            // options={({ route, navigation }) => {
            //   const catID = route.params.categoryId;
            //   return {
            //     title: catID,
            //   };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
