import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import CategoryScreen from "./screens/CategoryScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light">
        <CategoryScreen />
      </StatusBar>
    </>
  );
  Y;
}

const styles = StyleSheet.create({
  container: {},
});
