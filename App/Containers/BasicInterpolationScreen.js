import React, { Component } from 'react'
import { StyleSheet, Animated, TouchableWithoutFeedback, View, Easing, Dimensions } from 'react-native'

import FlatButton from '../Components/FlatButton'

const SCREEN_WIDTH = Dimensions.get('window').width;
const ELEMENT_WIDTH = 50;

class BasicInterpolationScreen extends Component {
  constructor() {
    super();

    let xPosition = new Animated.Value(0);
    let yPosition = xPosition.interpolate({
      inputRange: [0, 50, 150],
      outputRange: [0, 50, -10],
      /*
       * this is the default and not needed
       * but try "clamp" and "identity", too
       */
      extrapolate: "extend",
    });

    this.state = {
      xPosition,
      yPosition
    }

  }
  triggerAnimation() {
    Animated.timing(
      this.state.xPosition,
      {
        toValue: SCREEN_WIDTH - ELEMENT_WIDTH,
        duration: 1000,
        delay: 200,
        easing: Easing.in(Easing.linear)
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
              width: ELEMENT_WIDTH,
              height: ELEMENT_WIDTH,
              transform: [
                {translateX: this.state.xPosition},
                {translateY: this.state.yPosition},
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
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  animated: {
    backgroundColor: '#333333',
  }
});

export default BasicInterpolationScreen

