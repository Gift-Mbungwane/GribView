import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatGrid } from "react-native-super-grid";

export default function App() {
  const items = [
    { name: "TURQUOISE", code: "#1abc9c" },
    { name: "#009999", code: "#009999" },
    { name: "Aqua", code: "#00ffff" },
    { name: "Black Cat", code: "#000000" },
    { name: "Grey", code: "#808080" },
    { name: "Silver", code: "#C0C0C0" },

    { name: "Electric Blue", code: "#7DFDFE" },
    { name: "MIDNIGHT BLUE", code: "#033E3E" },
    { name: "SUN FLOWER", code: "#f1c40f" },
    { name: "CARROT", code: "#e67e22" },
    { name: "ALIZARIN", code: "#e74c3c" },
    { name: "CLOUDS", code: "#ecf0f1" },
    { name: "CONCRETE", code: "#95a5a6" },
    { name: "Green Apple", code: "#4CC417" },
    { name: "PUMPKIN", code: "#d35400" },
    { name: "POMEGRANATE", code: "#c0392b" },
    { name: "SILVER", code: "#bdc3c7" },
    { name: "ASBESTOS", code: "#7f8c8d" },
  ];

  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
});
