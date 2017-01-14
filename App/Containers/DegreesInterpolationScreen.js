import React, { Component } from 'react'
import { StyleSheet, Animated, TouchableWithoutFeedback, View, Easing, Dimensions } from 'react-native'

import FlatButton from '../Components/FlatButton'

const SCREEN_WIDTH = Dimensions.get('window').width;
const ELEMENT_WIDTH = 50;

class DegreesInterpolationScreen extends Component {
  constructor() {
    super();

    let degreeSeed = new Animated.Value(0);
    let degrees = degreeSeed.interpolate({
      inputRange: [0, 150],
      outputRange: ['0deg', '90deg'],
      /*
       * this is the default and not needed
       * but try "clamp" and "identity", too
       */
      extrapolate: "extend",
    });

    this.state = {
      degreeSeed,
      degrees
    }

  }
  triggerAnimation() {
    Animated.spring(
      this.state.degreeSeed,
      {
        toValue: 100,
        friction: 1
      }
    ).start();
  }
  resetAnimation() {
      this.state.degreeSeed.setValue(0);
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
                {rotate: this.state.degrees},
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

export default DegreesInterpolationScreen

