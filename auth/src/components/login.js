import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from '.';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: '', loading: false };
        this.onButtonPress = this.onButtonPress.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLoginFail = this.onLoginFail.bind(this);
    }

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        // Attempt to sign in. Attempt to sign up if account does not exist.
        // Throw an error if sign up fails.
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess)
                    .catch(this.onLoginFail);
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed.', loading: false });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />;
        }

        return (
            <Button onPress={this.onButtonPress}>
                Log in
            </Button>
        );
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
                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
};

const styles = StyleSheet.create({
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

export { Login }
