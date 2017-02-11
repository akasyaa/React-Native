import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Button, Card, CardSection } from '.';

class Login extends Component {
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                        style={styles.textInputStyle} />
                </CardSection>
                <CardSection>
                </CardSection>
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    };
};

const styles = StyleSheet.create({
    textInputStyle: {
        height: 20,
        width: 300
    }
});

export { Login }
