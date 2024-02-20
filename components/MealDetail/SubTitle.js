import { View, Text, StyleSheet } from "react-native";
import { Children } from "react/cjs/react.production.min";

function SubTitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}
export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e59797",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#e59797",
    marginHorizontal: 18,
  },
});
