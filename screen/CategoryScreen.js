import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

import CateogryItemTileScreen from "../components/CateogryItemTileScreen";

function CategoryScreen({ navigation }) {
  function CategoryItemRenderScreen(itemData) {
    function navigateToMealOverViewScreen() {
      navigation.navigate(
        "mealOverView",
        (params = {
          categoryId: itemData.item.id,
        })
      );
    }

    return (
      <CateogryItemTileScreen
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={navigateToMealOverViewScreen}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={CategoryItemRenderScreen}
      key="categories"
      numColumns={2}
    />
  );
}
export default CategoryScreen;
