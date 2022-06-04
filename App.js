import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from 'react-native';

import api from './src/services/api';
import Produtos from './src/Produtos/produtos';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
      loading: true
    };
  }

  async componentDidMount() {
    const response = await api.get('https://api.jsonbin.io/b/62916da205f31f68b3aacb2a/2');
    this.setState({
      produtos: response.data,
      loading: false
    });
  }

  render() {

    if (this.state.loading) {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <ActivityIndicator color="#09A6FF" size={40} />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>

          <FlatList
            data={this.state.produtos}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Produtos data={item} />}
          />

        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;

