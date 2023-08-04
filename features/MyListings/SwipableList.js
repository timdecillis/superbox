import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { GlobalViewFlat, GlobalView } from '../../globalComponents/globalStyles.js'

const SwipableList = ({ data, deleteItem, changeStatus, handleEdit, activeFilter }) => {
  const renderItem = (data, rowMap) => {
    return (
      <GlobalView style={styles.rowFront}>
        <Image style={styles.thumbnail} source={{ uri: data.item.photos[0] }} />
        <GlobalView style={styles.detailsContainer}>
          <Text style={styles.productName}>{data.item.product_name}</Text>
          <Text style={styles.productDetail}>
            Condition: {data.item.condition}
          </Text>
          <Text style={styles.productDetail}>Price: {data.item.price}</Text>
        </GlobalView>
      </GlobalView>
    );
  };

  return (
    <SwipeListView
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      renderHiddenItem={(data, rowMap) => {
        let leftButton, rightButton;
        switch (activeFilter) {
          case "active":
            leftButton = (
              <TouchableOpacity
                style={[styles.hidBtn, styles.editBtn]}
                onPress={(_) => deleteItem(data.item.id)}
              >
                <Text style={styles.backTextWhite}>Edit</Text>
              </TouchableOpacity>
            );
            rightButton = (
              <TouchableOpacity
                style={[styles.hidBtn, styles.deactivBtn]}
                onPress={(_) => changeStatus(data.item.id, "inactive")}
              >
                <Text style={styles.backTextWhite}>Deactivate</Text>
              </TouchableOpacity>
            );
            break;
          case "inactive":
            rightButton = (
              <TouchableOpacity
                style={[styles.hidBtn, styles.activateBtn]}
                onPress={(_) => changeStatus(data.item.id, "inactive")}
              >
                <Text style={styles.backTextWhite}>Activate</Text>
              </TouchableOpacity>
            );
            leftButton = (
              <TouchableOpacity
                style={[styles.hidBtn, styles.delBtn]}
                onPress={(_) => deleteItem(data.item.id)}
              >
                <Text style={styles.backTextWhite}>Delete</Text>
              </TouchableOpacity>
            );
            break;
          default:
            rightButton = null;
            leftButton = null;
            break;
        }

        return (
          <View style={styles.rowBack}>
            {leftButton}
            {rightButton}
          </View>
        );
      }}
      leftOpenValue={75}
      rightOpenValue={-75}
    />
  );
};

export default SwipableList;


// Styles

const styles = StyleSheet.create({
  rowFront: {
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  detailsContainer: {
    marginLeft: 15,
  },
  productName: {
    fontWeight: "500",
    fontSize: 16,
  },
  productDetail: {
    fontSize: 12,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  hidBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  delBtn: {
    backgroundColor: 'red',
    left: 0,
  },
  editBtn: {
    backgroundColor: 'blue',
    left: 0,
  },
  deactivBtn: {
    backgroundColor: 'pink',
    right: 0,
  },
  activateBtn: {
    backgroundColor: 'green',
    right: 0,
  },
  backTextWhite: {
    color: "#FFF",
  },
});
