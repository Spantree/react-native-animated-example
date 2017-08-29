import React, { Component } from 'react'
import { StyleSheet, Animated, TouchableWithoutFeedback, View, Easing } from 'react-native'

import FlatButton from '../Components/FlatButton'

class BasicAnimationScreen extends Component {
  constructor() {
    super();

    this.state = {
      xPosition: new Animated.Value(0),
    }

  }
  triggerAnimation() {
    Animated.timing(
      this.state.xPosition,
      {
        toValue: 100,
        duration: 1000,
        delay: 200,
        easing: Easing.out(Easing.quad)
      }
    ).start();
  }
  resetAnimation() {
      this.state.xPosition.setValue(0);
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
                {translateX: this.state.xPosition},
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

export default BasicAnimationScreen

