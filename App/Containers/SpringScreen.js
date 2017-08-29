import React, { Component } from 'react'
import { StyleSheet, Animated, TouchableWithoutFeedback, View } from 'react-native'

import FlatButton from '../Components/FlatButton'

class SpringScreen extends Component {
  constructor() {
    super();

    this.state = {
      size: new Animated.Value(50),
    }
  }
  triggerAnimation() {
    Animated.spring(
      this.state.size,
      {
        toValue: 200,
        friction: 1
      }
    ).start();
  }
  resetAnimation() {
    this.state.size.setValue(50);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatButton text="Reset" onPress={() => this.resetAnimation()} />
        <View style={styles.animationContainer}>
          <TouchableWithoutFeedback onPress={() => this.triggerAnimation()}>
            <Animated.View style={[styles.animated, {
              width: this.state.size,
              height: this.state.size,
            }]}>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animated: {
    backgroundColor: '#333333',
  }
});

export default SpringScreen

