import { View, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealDetail from "../components/MealDetail";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <View>
        <MealDetail
          affordability={selectedMeal.id}
          complexity={selectedMeal.complexity}
          duration={selectedMeal.duration}
        />
      </View>

      <View>
        <Text>Ingrediants</Text>
        {selectedMeal.ingredients.map((ingrediant) => (
          <Text key={ingrediant}>{ingrediant}</Text>
        ))}
        <Text>Steps</Text>
        {selectedMeal.steps.map((step) => (
          <Text key={step}>{step}</Text>
        ))}
      </View>
    </View>
  );
}
export default MealDetailScreen;
