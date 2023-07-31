import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const Search = () => {

  return (
    <View>
      <View style={{
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  }}>
      <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={    {fontSize: 20,
            marginLeft: 10,
            width: "90%",}}
          placeholder="Search"
        />
      </View>
    </View>

  )
}
export default Search;