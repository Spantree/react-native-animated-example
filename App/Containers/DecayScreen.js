import React, { Component } from 'react'
import { StyleSheet, Animated, TouchableWithoutFeedback, View } from 'react-native'

import FlatButton from '../Components/FlatButton'

class DecayScreen extends Component {
  constructor() {
    super();

    this.state = {
      position: new Animated.ValueXY({x: 0, y: 0}),
    }

  }
  triggerAnimation() {
    Animated.decay(
      this.state.position,
      {
        velocity: {x: 1, y: 1},
        deceleration: .99
      }
    ).start();
  }
  resetAnimation() {
    this.state.position.setValue({x:0, y: 0});
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatButton text="Reset" onPress={() => this.resetAnimation()} />
        <View style={styles.animationContainer}>
          <TouchableWithoutFeedback onPress={() => this.triggerAnimation()}>
            <Animated.View style={[styles.animated, {
              width: 50,
              height: 50,
              transform: [
                {translateX: this.state.position.x},
                {translateY: this.state.position.y},
              ]
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
    marginTop: 64
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

export default DecayScreen

