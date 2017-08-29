import React, { Component } from 'react'
import { StyleSheet, Animated, TouchableWithoutFeedback, View } from 'react-native'

import FlatButton from '../Components/FlatButton'

class ParallelScreen extends Component {
  constructor() {
    super();

    this.state = {
      size: new Animated.Value(50),
      position: new Animated.ValueXY({x: 0, y: 0}),
    }
  }
  triggerAnimation() {
    Animated.sequence([
      Animated.spring(
        this.state.size,
        {
          toValue: 100,
          friction: 1
        }
      ),
      Animated.decay(
        this.state.position,
        {
          velocity: {x: 1, y: 1},
          deceleration: .99
        }
      )
    ]).start();
  }
  resetAnimation() {
    this.state.size.setValue(50);
    this.state.position.setValue({x:0, y: 0});
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

export default ParallelScreen

