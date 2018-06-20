import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import {Container} from 'native-base';
import Heart from './heart';
export default class SplashScreen extends Component {
  render() {
    return (
      <Container style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
        <View>
            <Image
                source={require('./../../../../images/3a-soft-logo.png')}
            />

        </View>
      </Container>
    )
  }
}
