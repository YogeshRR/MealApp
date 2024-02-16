import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

import CateogryItemTileScreen from "../components/CateogryItemTileScreen";

function CategoryItemRenderScreen(itemData) {
  return (
    <CateogryItemTileScreen
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
}

function CategoryScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={CategoryItemRenderScreen}
      numColumns={2}
      key="categories"
    />
  );
}
export default CategoryScreen;
