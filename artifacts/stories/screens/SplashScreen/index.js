import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container } from 'native-base';
export default class SplashScreen extends Component {
    render() {
        return (React.createElement(Container, { style: { backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' } },
            React.createElement(View, null,
                React.createElement(Image, { source: require('./../../../../images/3a-soft-logo.png') }))));
    }
}
//# sourceMappingURL=index.js.map