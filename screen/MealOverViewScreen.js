import { View, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import { StyleSheet } from "react-native";

import MealItemScreen from "../components/MealItemScreen";

function MealOverViewScreen({ route }) {
  const categoryId = route.params.categoryId;
  const displayedMealItems = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });
  function renderMealItemScreen(itemData) {
    return <MealItemScreen title={itemData.item.title} />;
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

export default MealOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
