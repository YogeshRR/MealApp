import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function HeaderButton() {
  function likeButtonPressed() {
    console.log("pressed");
  }
  return (
    <Pressable
      onPress={likeButtonPressed}
      style={({ pressed }) => pressed && styles.pressable}
    >
      <Ionicons name="star" size={24} color={"white"} />
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
