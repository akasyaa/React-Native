import React, { Component } from 'react';
import { View, Button } from 'react-native';
import firebase from 'firebase';
import { Header, Login, Spinner } from './components';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCJXrN1LhK91GeiTp2AxEfiV_LCZP4f7CE",
            authDomain: "auth-e7883.firebaseapp.com",
            databaseURL: "https://auth-e7883.firebaseio.com",
            storageBucket: "auth-e7883.appspot.com",
            messagingSenderId: "801227475796"
      });

      firebase.auth().onAuthStateChanged((user) => {
          if (user) {
              this.setState({ loggedIn: true });
          } else {
              this.setState({ loggedIn: false });
          }
      });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <Button>Log Out</Button>

            case false:
                return <Login />;

            default:
                return <Spinner size='large' />;
        }

        
    }

    render() {
        return (
            <View>
                <Header text="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
