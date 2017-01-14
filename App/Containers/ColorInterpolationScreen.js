import React, { Component } from 'react'
import { StyleSheet, Animated, TouchableWithoutFeedback, View, Easing, Dimensions } from 'react-native'

import FlatButton from '../Components/FlatButton'

const SCREEN_WIDTH = Dimensions.get('window').width;
const ELEMENT_WIDTH = 250;

class ColorInterpolationScreen extends Component {
  constructor() {
    super();

    let colorSeed = new Animated.Value(0);
    let color = colorSeed.interpolate({
      inputRange: [0, 150],
      outputRange: ['#f1e05a', '#438eff'],
      /*
       * this is the default and not needed
       * but try "clamp" and "identity", too
       */
      extrapolate: "extend",
    });

    this.state = {
      colorSeed,
      color
    };

  }
  triggerAnimation() {
    Animated.spring(
      this.state.colorSeed,
      {
        toValue: 100,
        friction: 1
      }
    ).start();
  }
  resetAnimation() {
      this.state.colorSeed.setValue(0);
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
              backgroundColor: this.state.color,
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

export default ColorInterpolationScreen

