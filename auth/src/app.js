import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components';

class App extends Component {
    render() {
        return (
            <View>
                <Header text="Authentication" />
                <Text>App!</Text>
            </View>
        );
    }
}

export default App;
