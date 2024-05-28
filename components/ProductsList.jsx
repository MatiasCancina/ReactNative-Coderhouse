import { useState } from "react";
import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export const ProductList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [text, setText] = useState("");
  const [products, setProducts] = useState(["naranjas", "manzanas", "bananas"]);

  const addProduct = () => {
    if (text.trim() !== "") {
      setProducts([...products, text]);
      setText("");
    }
  };

  const deleteProduct = (product) => {
    setProducts(products.filter((p) => p !== product));
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>Lista de compras</Text>

      <View style={styles.addProdContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu producto"
          value={text}
          onChangeText={setText}
        />
        <Button title="+" onPress={addProduct} />
      </View>

      <View style={styles.productList}>
        {products.map((product, index) => (
          <Pressable
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => openModal(product)}
          >
            <Text style={styles.product}>{product}</Text>
            <Text
              style={{ color: "red" }}
              onPress={() => deleteProduct(product)}
            >
              Delete
            </Text>
          </Pressable>
        ))}
      </View>

      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{selectedProduct}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeModal}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  addProdContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    padding: 5,
    marginRight: 5,
    width: 250,
    borderRadius: 5,
  },
  productList: {
    borderWidth: 1,
  },
  product: {
    fontSize: 20,
    fontWeight: "900",
    margin: 20,
    backgroundColor: "#ffff00a6",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 40,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
  },
});
