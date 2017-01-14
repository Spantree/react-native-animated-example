import React, { Component } from 'react'
import { Animated, Dimensions, TouchableHighlight, View, Text, ListView, RefreshControl } from 'react-native'
import { StyleSheet } from 'react-native'

class FlatButton extends Component {
  render() {
    return (
        <TouchableHighlight style={styles.buttonWrapper} onPress={() => this.props.onPress()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.props.text}</Text>
          </View>
        </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    margin: 10
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
  },
  buttonText: {
    textAlign: 'center'
  },
});

export default FlatButton

