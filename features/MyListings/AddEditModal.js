import React, { useState } from "react";
import {
  View,
  Modal,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Switch,
  TouchableOpacity
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const AddEditListingModal = ({ modalInfo, onClose, onSubmit }) => {
  const [listingInfo, setListingInfo] = useState({ ...modalInfo });
  const [productsList, setProductsList] = useState([
    { name: "batman 31", id: 1 },
    { name: "spiderman 20", id: 2 },
    { name: "superman poster", id: 1 },
  ]);
  //axios.get ( all products {productName, product_Id})
  const [isNewProduct, setIsNewProduct] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [prodName, setProdName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [photos, setPhotos] = useState(listingInfo.photos || []);

  const handleSave = () => {
    //TODO: add validation logic here before saving the new listing
    // onSave(listingInfo);

    setListingInfo({ ...listingInfo, name: product.name });
    setListingInfo({ ...listingInfo, photos });
    onClose();
  };

  const handleWriteName = (name) => {
    let regex = new RegExp(name, "ig");
    setFilteredProducts(
      productsList.filter((product) => regex.test(product.name))
    );
    setProdName(name);
  };

  const handleProductSelection = (product) => {
    setIsNewProduct(false);
    setProdName(product);
    setFilteredProducts([]);
  };

  const handleNewProduct = () => {
    setIsNewProduct(true);
    setFilteredProducts([]);
  };

  const handlePriceInput = (text) => {
    const cleanText = text.replace(/[^0-9.]/g, "");
    setListingInfo({ ...listingInfo, price: cleanText });
  };

  const handleAddPhoto = () => {
    if (photoUrl) {
      setPhotos([...photos, photoUrl]);
      setPhotoUrl("");
    }
  };

  const handleRemovePhoto = (index) => {
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
  };

  const handleSelects = (value, type) => {
    switch (type) {
      case "condition":
        setListingInfo({ ...listingInfo, condition: value });
        break;
      case 'category':
        setListingInfo({ ...listingInfo, category: value });
        break;
    }
  };


  return (
    <Modal visible={modalInfo.visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          placeholder="Product Name"
          value={prodName}
          onChangeText={handleWriteName}
          style={styles.input}
        />
        {filteredProducts.length > 0 && (
          <ScrollView style={styles.dropdown}>
            {filteredProducts.map((product, index) => (
              <Text key={index} onPress={() => handleProductSelection(product.name)}>
                {product.name}
              </Text>
            ))}
            <Text onPress={() => setIsNewProduct(true)}>
              Create new product
            </Text>
          </ScrollView>
        )}
        {isNewProduct && (
          <View style={styles.checkboxContainer}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              value={isNewProduct}
              onValueChange={setIsNewProduct}
            />
            <Text>Creating New Product</Text>
          </View>
        )}
        <TextInput
          placeholder="Product Description"
          value={listingInfo.description}
          onChangeText={(text) =>
            setListingInfo({ ...listingInfo, description: text })
          }
          style={styles.input}
        />

        <TextInput
          placeholder="Price"
          value={listingInfo.price}
          onChangeText={handlePriceInput}
          keyboardType="numeric"
          style={styles.input}
        />

        <View style={styles.dropdownContainer}>
          <Text>Condition:</Text>
          <RNPickerSelect
            value={listingInfo.condition}
            onValueChange={(itemValue) => handleSelects(itemValue, 'condition')}
            items={[
              { label: "Mint", value: "mint" },
              { label: "Near Mint", value: "near mint" },
              { label: "Moderately Used", value: "moderately used" },
              { label: "Heavily Used", value: "heavily used" },
              { label: "Damaged", value: "damaged" },
            ]}
          />
        </View>

        <View style={styles.dropdownContainer}>
          <Text>Category:</Text>
          <RNPickerSelect
            value={listingInfo.category}
            onValueChange={(itemValue) => handleSelects(itemValue, 'condition')}
            items={[
              { label: "Comic Books", value: "Comic Books" },
              { label: "Funko Pops", value: "Funko Pops" },
              { label: "Action Figures", value: "Action Figures" },
              { label: "Decor", value: "Decor" },
              { label: "Apparel", value: "Apparel" },
            ]}
          />
        </View>

        <TextInput
          placeholder="Photo URL"
          value={photoUrl}
          onChangeText={setPhotoUrl}
          style={styles.input}
        />
        <Button title="Add Photo" onPress={handleAddPhoto} />
        {photos.map((photo, index) => (
          <View key={index} style={styles.photoContainer}>
            <Image source={{ uri: photo }} style={styles.thumbnail} />
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemovePhoto(index)}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.buttonContainer}>
          <Button title="Save" onPress={handleSave} />
          <Button title="Cancel" onPress={onClose} color="red" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  dropdown: {
    width: "100%",
    maxHeight: 200,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  dropdownContainer: {
    width: "100%",
    marginBottom: 10,
  },
  photoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  removeButton: {
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "#fff",
  },
});

export default AddEditListingModal;
