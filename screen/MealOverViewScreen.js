import { View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import { StyleSheet } from "react-native";

function MealOverViewScreen() {
  return (
    <View>
      <Text>MealsOverView</Text>
    </View>
  );
}

export default MealOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
