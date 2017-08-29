import React, { Component } from 'react'
import { PanResponder, StyleSheet, Animated, TouchableWithoutFeedback, View } from 'react-native'

const ELEMENT_WIDTH = 100;
const NUM_HEADS = 6;
const HEAD_COLORS = [
   "coral",
   "cornflowerblue",
   "cornsilk",
   "crimson",
   "cyan",
   "darkblue",
   "darkcyan",
   "darkgoldenrod",
   "darkgray",
   "darkgreen",
   "darkgrey",
   "darkkhaki",
   "darkmagenta",
   "darkolivegreen",
];

class EventChatHeadsScreen extends Component {
  constructor() {
    super();

    this.state = {
      position: new Animated.ValueXY(),
      headPositions: []
    };

    for(let i = 0; i < NUM_HEADS; i++) {
      this.state.headPositions.push(new Animated.ValueXY());
    }
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
        this.state.position.extractOffset();
      }
    })

    this.state.headPositions.forEach((headPosition, idx) => {
      let input;
      if(idx === 0) {
        input = this.state.position;
      } else {
        input = this.state.headPositions[idx - 1];
      }

      Animated.spring(
        this.state.headPositions[idx],
        {
          toValue: input,
          friction: 8,
          tension: 100
        }
      ).start();
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.animationContainer}>
          {this.state.headPositions.map((position, idx) => {
            return(
              <Animated.View key={idx} style={[styles.animated, {
                width: ELEMENT_WIDTH,
                height: ELEMENT_WIDTH,
                position: 'absolute',
                backgroundColor: HEAD_COLORS[idx],
                transform: [
                  {translateX: this.state.headPositions[idx].x},
                  {translateY: this.state.headPositions[idx].y},
                ]
              }]} {...this._panResponder.panHandlers}/>
            );
          })}
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
    backgroundColor: 'lightblue',
    borderRadius: ELEMENT_WIDTH / 2,
    borderWidth: 3,
    borderColor: '#333333'
  }
});

export default EventChatHeadsScreen

