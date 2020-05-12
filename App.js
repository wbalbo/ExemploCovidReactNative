import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  state = {
    casos: '', mortes: '', casosHoje: '', mortesHoje: ''
  }

  ObtemDadosAPI() {
    fetch('https://corona.lmao.ninja/v2/all', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
            casos: json.cases,
            mortes: json.deaths,
            casosHoje: json.todayCases,
            mortesHoje: json.todayDeaths
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    this.ObtemDadosAPI();
    return (
      <View style={styles.container}>
          <Text>Casos no Mundo: {this.state.casos} </Text>
          <Text>Mortes no Mundo: {this.state.mortes}</Text>
          <Text>Casos hoje: {this.state.casosHoje}</Text>
          <Text>Mortes hoje: {this.state.mortesHoje}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});