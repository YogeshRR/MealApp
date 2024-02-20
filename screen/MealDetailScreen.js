import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealDetail from "../components/MealDetail";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import HeaderButton from "../components/HeaderButton";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton />,
    });
  });
  return (
    <ScrollView style={styles.scrollStyle}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetail
        affordability={selectedMeal.id}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detailedTextStyle}
      />
      <View style={styles.innerContainer}>
        <SubTitle>Ingrediants</SubTitle>
        <List data={selectedMeal.ingredients} />
        <SubTitle>Steps</SubTitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },

  detailedTextStyle: {
    color: "white",
  },

  someRemainedText: {
    height: 50,
    width: "100%",
  },
  innerContainer: {
    height: "80%",
  },
  scrollStyle: {
    marginBottom: 40,
  },
});
