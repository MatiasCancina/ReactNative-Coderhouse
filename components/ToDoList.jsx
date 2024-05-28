import { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ToDoList = () => {
  const [itemList, setItemList] = useState([
    { id: 1, value: "Ir al dentista" },
    { id: 2, value: "Ir al gimnasio" },
    { id: 3, value: "Ir al shopping" },
    { id: 4, value: "Pasear el perro" },
  ]);

  const [textItem, setTexItem] = useState("");
  const [modalView, setModalView] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const addItem = () => {
    setItemList((currentValue) => [
      ...currentValue,
      { id: Math.random().toString(), value: textItem },
    ]);
    setTexItem("");
    console.log(itemList);
  };

  const handleChangeText = (text) => setTexItem(text);

  const openModal = (item) => {
    setItemSelected(item);
    setModalView(true);
  };

  const closeModal = () => {
    setModalView(false);
    setItemSelected({});
  };

  const handleDelete = () => {
    const filter = itemList.filter((task) => task !== itemSelected);
    setItemList(filter);
    setModalView(false);
  };

  return (
    <View>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>To Do List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder=""
          value={textItem}
          onChangeText={handleChangeText}
        />

        <Button title="Add" onPress={addItem} />
      </View>

      <View style={styles.taskContainer}>
        <View style={{ padding: 10 }}>
          <FlatList
            data={itemList}
            keyExtractor={(task) => task.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => openModal(item)}
                style={styles.card}
              >
                <Text style={styles.task}>{item.value}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      <Modal visible={modalView} transparent={true} animationType="slide">
        <View style={styles.modalStyles}>
          <View style={styles.modalContainer}>
            <Text>Estas seguro que queres borrar: </Text>
          </View>
          <View style={styles.modalContainer}>
            <Text style={styles.textModal}>
              Estas seguro que queres borrar:
            </Text>
          </View>
          <View style={styles.btnContainer}>
            <Button title="Borrar" onPress={handleDelete} />
            <Button title="Cancelar" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
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
  taskContainer: {
    marginTop: 15,
    borderWidth: 5,
  },
  task: {
    marginVertical: 10,
    fontSize: 20,
    backgroundColor: "#68d2ef",
    padding: 15,
    borderRadius: 10,
  },
  card: {
    justifyContent: "center",
    backgroundColor: "#66666",
    alignItems: "center",
    width: "100%",
    paddingVertical: 8,
    marginVertical: 8,
    borderRadius: 5,
  },
  modalStyles: {
    backgroundColor: "#cccc66",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    padding: 10,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 20,
  },
  textModal: {
    fontWeight: "bold",
  },
});

export default ToDoList;
