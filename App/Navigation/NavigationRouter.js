import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'

// screens identified by the router
import SelectionScreen from '../Containers/SelectionScreen'

import SpringScreen from '../Containers/SpringScreen'
import DecayScreen from '../Containers/DecayScreen'
import TimingScreen from '../Containers/TimingScreen'

import ParallelScreen from '../Containers/ParallelScreen'
import SequenceScreen from '../Containers/SequenceScreen'
import StaggerScreen from '../Containers/StaggerScreen'

import BasicInterpolationScreen from '../Containers/BasicInterpolationScreen'
import ComplexInterpolationScreen from '../Containers/ComplexInterpolationScreen'
import DegreesInterpolationScreen from '../Containers/DegreesInterpolationScreen'
import ColorInterpolationScreen from '../Containers/ColorInterpolationScreen'

import BindPositionScreen from '../Containers/BindPositionScreen'
import BindPositionWithDecayScreen from '../Containers/BindPositionWithDecayScreen'
import SpringBindPositionScreen from '../Containers/SpringBindPositionScreen'
import SpringWithDecayScreen from '../Containers/SpringWithDecayScreen'
import EventChatHeadsScreen from '../Containers/EventChatHeadsScreen'

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key="root">
          <Scene initial={true} key="selections" component={SelectionScreen} title="Animations!"/>

          <Scene key="spring" component={SpringScreen} title="Spring" />
          <Scene key="decay" component={DecayScreen} title="Decay" />
          <Scene key="timing" component={TimingScreen} title="Timing" />

          <Scene key="parallel" component={ParallelScreen} title="Parallel" />
          <Scene key="sequence" component={SequenceScreen} title="Sequence" />
          <Scene key="stagger" component={StaggerScreen} title="Stagger" />

          <Scene key="basicInterpolation" component={BasicInterpolationScreen} title="Basic Interpolation" />
          <Scene key="complexInterpolation" component={ComplexInterpolationScreen} title="Complex Interpolation" />
          <Scene key="degreesInterpolation" component={DegreesInterpolationScreen} title="Degree Interpolation" />
          <Scene key="colorInterpolation" component={ColorInterpolationScreen} title="Color Interpolation" />

          <Scene key="bindPosition" component={BindPositionScreen} title="Bind Position" />
          <Scene key="bindPositionWithDecay" component={BindPositionWithDecayScreen} title="Bind Position with Decay" />
          <Scene key="springBindPosition" component={SpringBindPositionScreen} title="Spring-bind Position" />
          <Scene key="springWithDecay" component={SpringWithDecayScreen} title="Spring-bind Position with Decay" />
          <Scene key="eventChatHeads" component={EventChatHeadsScreen} title="Chat Heads" />

        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter


