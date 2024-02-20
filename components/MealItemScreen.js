import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

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
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>{duration} m </Text>
              <Text style={styles.textStyle}>{complexity}</Text>
              <Text style={styles.textStyle}>{affordability}</Text>
            </View>
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

  textContainer: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
  textStyle: {
    margin: 16,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
