import { Button } from "react-native";

function HeaderButton() {
  function likeButtonPressed() {
    console.log("pressed");
  }
  return <Button title="Tap Me" onPress={likeButtonPressed} />;
}
export default HeaderButton;
