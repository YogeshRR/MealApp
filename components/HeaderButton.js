import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorite-context";

function HeaderButton({ mealId }) {
  const favoriteContext = useContext(FavoritesContext);

  const mealIsFavorite = favoriteContext.ids.includes(mealId);
  function likeButtonPressed() {
    if (mealIsFavorite) {
      favoriteContext.removeFavorite(mealId);
    } else {
      favoriteContext.addFavorite(mealId);
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
