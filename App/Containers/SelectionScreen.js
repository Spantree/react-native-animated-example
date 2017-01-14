import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'

import FlatButton from '../Components/FlatButton'

class SelectionScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.buttonGroup}>
            <Text style={styles.headerText}>Basic Animations</Text>
            <FlatButton text="Spring" onPress={() => NavigationActions.spring()} />
            <FlatButton text="Decay" onPress={() => NavigationActions.decay()} />
            <FlatButton text="Timing" onPress={() => NavigationActions.timing()} />
          </View>


          <View style={styles.buttonGroup}>
            <Text style={styles.headerText}>Composing Animations</Text>
            <FlatButton text="Parallel" onPress={() => NavigationActions.parallel()} />
            <FlatButton text="Sequence" onPress={() => NavigationActions.sequence()} />
            <FlatButton text="Stagger" onPress={() => NavigationActions.stagger()} />
          </View>

          <View style={styles.buttonGroup}>
            <Text style={styles.headerText}>Interpolations</Text>
            <FlatButton text="Basic Value" onPress={() => NavigationActions.basicInterpolation()} />
            <FlatButton text="Complex with Dead Zones" onPress={() => NavigationActions.complexInterpolation()} />
            <FlatButton text="Degrees" onPress={() => NavigationActions.degreesInterpolation()} />
            <FlatButton text="Colors" onPress={() => NavigationActions.colorInterpolation()} />
          </View>

        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64
  },
  buttonGroup: {
    marginBottom: 15
  },
  headerText: {
    margin: 10,
    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  }
});

export default SelectionScreen

