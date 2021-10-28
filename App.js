import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default class App extends Component {
  state = {
    counter: 0,
  };

  _onPressIncrease = () => {
    this.setState({ counter: ++this.state.counter });
  };
  _onPressDecrease = () => {
    this.setState({ counter: --this.state.counter });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.counter}</Text>
        <View style={styles.buttonField}>
          <Button title="DECREASE" onPress={this._onPressDecrease} />
          <Button title="INCREASE" onPress={this._onPressIncrease} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold",
  },
  buttonField: {
    flexDirection: "row",
  justifyContent: "center",
  },
});
