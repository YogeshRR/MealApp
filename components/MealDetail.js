import { Text, View, StyleSheet } from "react-native";

function MealDetail({ duration, complexity, affordability }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>{duration} m </Text>
      <Text style={styles.textStyle}>{complexity}</Text>
      <Text style={styles.textStyle}>{affordability}</Text>
    </View>
  );
}
export default MealDetail;

const styles = StyleSheet.create({
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
});
