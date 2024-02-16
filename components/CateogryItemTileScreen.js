import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
function CategoryItemRenderScreen({ title, color }) {
  return (
    <View style={styles.grideItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryItemRenderScreen;

const styles = StyleSheet.create({
  grideItem: {
    flex: 1,
    borderRadius: 8,
    height: 150,
    elevation: 4,
    margin: 16,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0.25 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
