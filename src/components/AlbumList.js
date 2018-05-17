import React, { Component } from "react";
import { Text, View } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentDidMount() {
    const url = "https://rallycoding.herokuapp.com/api/music_albums";

    axios.get(url).then(response => {
      this.setState({
        albums: response.data
      });
    });
  }

  renderAlbums = () => {
    return this.state.albums.map(album => {
      return <AlbumDetail album={album} key={album.title} />;
    });
  };

  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
