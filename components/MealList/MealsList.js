import { Text, View, StyleSheet, FlatList } from "react-native";

import MealItemScreen from "../MealItemScreen";
function MealsList({ displayedMealItems }) {
  function renderMealItemScreen(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageURL: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItemScreen {...mealItemProps} />;
  }
  return (
    <View>
      <FlatList
        data={displayedMealItems}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItemScreen}
      />
    </View>
  );
}
export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
