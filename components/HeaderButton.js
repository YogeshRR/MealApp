import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
//import { useContext } from "react";
//import { FavoritesContext } from "../store/context/favorite-context";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favoriteMeals";

function HeaderButton({ mealId }) {
  // const favoriteContext = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealIsFavorite = favoriteMealIds.includes(mealId);
  function likeButtonPressed() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
      //favoriteContext.removeFavorite(mealId);
    } else {
      dispatch(addFavorite({ id: mealId }));
      //favoriteContext.addFavorite(mealId);
    }
  }
  return (
    <Pressable
      onPress={likeButtonPressed}
      style={({ pressed }) => pressed && styles.pressable}
    >
      <Ionicons
        name={mealIsFavorite ? "star" : "star-outline"}
        size={24}
        color={"white"}
      />
    </Pressable>
  );
}
export default HeaderButton;

const styles = StyleSheet.create({
  pressable: {
    opacity: 0.75,
    marginHorizontal: 10,
  },
});
