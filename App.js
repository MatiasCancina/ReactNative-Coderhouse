import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ProductList } from "./components/ProductsList";
import { ColorsList } from "./components/ColorsList";
import HairlineWidth from "./ui/HairlineWidth";
import ToDoList from "./components/ToDoList";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          marginTop: 40,
          fontSize: 40,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Learning Proyects
      </Text>

      <View
        style={{
          borderColor: "#ff0000",
          borderWidth: StyleSheet.hairlineWidth,
          marginTop: 10,
          marginBottom: 50,
        }}
      />

      <ColorsList />

      <HairlineWidth />

      <ProductList />

      <HairlineWidth />

      <ToDoList/>

      <HairlineWidth />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});