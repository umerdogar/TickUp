import { StyleSheet, View } from "react-native";
import Navigator from "./navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A20",
  },
});
