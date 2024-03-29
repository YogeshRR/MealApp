import { useEffect, useLayoutEffect } from "react";
import { View, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { StyleSheet } from "react-native";

import MealItemScreen from "../components/MealItemScreen";
import MealsList from "../components/MealList/MealsList";

function MealOverViewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const displayedMealItems = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList displayedMealItems={displayedMealItems} />;

  /*function renderMealItemScreen(itemData) {
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
    </View> */
}

export default MealOverViewScreen;
