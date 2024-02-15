import { Pressable, View, Text } from "react-native";
function CategoryItemRenderScreen({ title }) {
  return (
    <View>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}
export default CategoryItemRenderScreen;
