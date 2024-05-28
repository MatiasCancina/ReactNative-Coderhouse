import { StyleSheet, View } from "react-native";

export const HairlineWidth = () => {
  return (
    <View
      style={{
        borderColor: "#ff0000",
        borderWidth: StyleSheet.hairlineWidth,
        marginVertical: 50,
      }}
    />
  );
};

export default HairlineWidth;
