import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from '.';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: ''};
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress() {
        const { email, password } = this.state;

        // Attempt to sign in. Attempt to sign up if account does not exist.
        // Throw an error if sign up fails.
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed.'});
                    });
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        value={this.state.email}
                        onChangeText={ email => this.setState({ email }) }
                        placeholder="user@domain.com"
                      />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        value={this.state.password}
                        onChangeText={ password => this.setState({ password }) }
                        placeholder="Enter Password"
                        secure
                      />
                </CardSection>
                <Text styles={styles.errorStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    <Button onPress={this.onButtonPress}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    };
};

const styles = StyleSheet.create({
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

export { Login }
