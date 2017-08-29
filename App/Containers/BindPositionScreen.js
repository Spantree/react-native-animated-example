import React, { Component } from 'react'
import { PanResponder, StyleSheet, Animated, TouchableWithoutFeedback, View } from 'react-native'

const ELEMENT_WIDTH = 150;

class BindPositionScreen extends Component {
  constructor() {
    super();

    this.state = {
      position: new Animated.ValueXY(0)
    };
  }
  triggerAnimation() {
    Animated.spring(
      this.state.position,
      {
        toValue: {x: 0, y: 0},
        friction: 1
      }
    ).start();
  }
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderMove: Animated.event([
        null,
        {dx: this.state.position.x, dy: this.state.position.y},
      ]),
      onPanResponderRelease: () => {
        this.triggerAnimation()
      }

    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.animationContainer}>
            <Animated.View style={[styles.animated, {
              width: ELEMENT_WIDTH,
              height: ELEMENT_WIDTH,
              transform: [
                {translateX: this.state.position.x},
                {translateY: this.state.position.y},
              ]
            }]} {...this._panResponder.panHandlers}/>
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

export default BindPositionScreen

