import React, { Component } from "react";
import { Text, View } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Albums!</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
