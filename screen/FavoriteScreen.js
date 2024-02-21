import { useContext } from "react";
import MealsList from "../components/MealList/MealsList";
//import { FavoritesContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

function FavoriteScreen() {
  // const favoriteMealContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootScreenStyle}>
        <Text style={styles.text}>You do not have favorite Meals Yet</Text>
      </View>
    );
  }
  return <MealsList displayedMealItems={favoriteMeals} />;
}
export default FavoriteScreen;

const styles = StyleSheet.create({
  rootScreenStyle: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
