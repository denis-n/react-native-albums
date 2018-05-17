import React, { Component } from "react";
import { Text } from "react-native";
import Card from "./Card";

class AlbumDetail extends Component {
  render() {
    const { title, artist, url, image, thumbnail_image } = this.props.album;

    return (
      <Card>
        <Text>{title}</Text>
      </Card>
    );
  }
}

export default AlbumDetail;
