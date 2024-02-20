import { View, Text, StyleSheet } from "react-native";
function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listStyle}>
      <Text style={styles.listItemText}>{dataPoint}</Text>
    </View>
  ));
}
export default List;

const styles = StyleSheet.create({
  listStyle: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: "#edc2c2",
  },

  listItemText: {
    color: "#401a1a",
    textAlign: "center",
  },
});
