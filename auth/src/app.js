import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Login } from './components';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCJXrN1LhK91GeiTp2AxEfiV_LCZP4f7CE",
            authDomain: "auth-e7883.firebaseapp.com",
            databaseURL: "https://auth-e7883.firebaseio.com",
            storageBucket: "auth-e7883.appspot.com",
            messagingSenderId: "801227475796"
      });
    }

    render() {
        return (
            <View>
                <Header text="Authentication" />
                <Login />
            </View>
        );
    }
}

export default App;
