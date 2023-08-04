import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

const SwipableList = ({ data, deleteItem, changeStatus }) => {
  const renderItem = (data, rowMap) => {
    return (
      <View style={styles.rowFront}>
        <Image style={styles.thumbnail} source={{uri: data.item.photos[0]}} />
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{data.item.product_name}</Text>
          <Text style={styles.productDetail}>Condition: {data.item.condition}</Text>
          <Text style={styles.productDetail}>Price: {data.item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <SwipeListView
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      renderHiddenItem={ (data, rowMap) => (
        <View style={styles.rowBack}>
          <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]} onPress={_ => deleteItem(data.item.id)}>
            <Text style={styles.backTextWhite}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={_ => changeStatus(data.item.id, 'inactive')}>
            <Text style={styles.backTextWhite}>Inactive</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]} onPress={_ => changeStatus(data.item.id, 'active')}>
            <Text style={styles.backTextWhite}>Active</Text>
          </TouchableOpacity>
        </View>
      )}
      leftOpenValue={75}
      rightOpenValue={-150}
    />
  );
};

const styles = StyleSheet.create({
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
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
    fontWeight: '500',
    fontSize: 16,
  },
  productDetail: {
    fontSize: 12,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  backTextWhite: {
    color: '#FFF',
  },
});

export default SwipableList;
