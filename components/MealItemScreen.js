import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealDetail from "./MealDetail";

function MealItemScreen({
  title,
  imageURL,
  duration,
  complexity,
  affordability,
  id,
}) {
  const navigation = useNavigation();
  function selectMealDetailScreen() {
    navigation.navigate("mealDetailScreen", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItemContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={selectMealDetailScreen}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageURL }} style={styles.imageStyle} />
            <Text style={styles.titleStyle}>{title}</Text>
            <MealDetail
              affordability={affordability}
              complexity={complexity}
              duration={duration}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItemScreen;

const styles = StyleSheet.create({
  mealItemContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    margin: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0.25 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
