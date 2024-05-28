import { StyleSheet, Text, View } from "react-native";

export const ColorsList = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}>
        Cuadros de colores
      </Text>

      <View style={styles.wineBox}>
        <Text style={styles.text}>Wine #2aa198</Text>
      </View>
      <View style={styles.greenBox}>
        <Text style={styles.text}>Green #2aa198</Text>
      </View>
      <View style={styles.lightblueBox}>
        <Text style={styles.text}>Lightblue #268bd2</Text>
      </View>

      <View style={[styles.box, styles.cyan]}>
        <Text style={styles.text}>Cyan #2aa198</Text>
      </View>
      <View style={[styles.box, styles.blue]}>
        <Text style={styles.text}>Blue #268bd2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: "white",
  },
  wineBox: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#661212",
  },
  greenBox: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#126626",
  },
  lightblueBox: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#56b5f8",
  },
  box: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: "#2aa198",
  },
  blue: {
    backgroundColor: "#268bd2",
  },
});
