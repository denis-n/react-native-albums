import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

class AlbumDetail extends Component {
  gotoLink(url) {
    Linking.openURL(url);
  }

  render() {
    const { title, artist, url, image, thumbnail_image } = this.props.album;

    return (
      <Card>
        <CardSection>
          <View style={styles.thumnailContainerStyle}>
            <Image
              source={{ uri: thumbnail_image }}
              style={styles.thumnailStyle}
            />
          </View>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTitleStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image source={{ uri: image }} style={styles.imageStyle} />
        </CardSection>

        <CardSection>
          <Button onClick={() => this.gotoLink(url)}>Buy Now!</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  thumnailStyle: {
    height: 50,
    width: 50
  },
  thumnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  headerTitleStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;
