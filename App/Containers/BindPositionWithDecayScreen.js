import React, { Component } from 'react'
import { PanResponder, StyleSheet, Animated, TouchableWithoutFeedback, View } from 'react-native'

const ELEMENT_WIDTH = 150;

class BindPositionWithDecayScreen extends Component {
  constructor() {
    super();

    this.state = {
      position: new Animated.ValueXY(0)
    };
  }
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant:() => {
        //In the case that the decay is currently happening, this will allow the user
        //to "catch" the element and manipulate it as expected.
        this.state.position.stopAnimation(() => this.state.position.extractOffset());
      },
      onPanResponderMove: Animated.event([
        null,
        {dx: this.state.position.x, dy: this.state.position.y},
      ]),
      onPanResponderRelease: (evt, gestureState) => {
        // this.state.position.extractOffset()
        Animated.decay(
          this.state.position,
          {
            velocity: {x: gestureState.vx, y: gestureState.vy},
            deceleration: .99
          }
        ).start(() => this.state.position.extractOffset())
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

export default BindPositionWithDecayScreen

