import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from '.';

class Login extends Component {
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        value={this.state.text}
                        onChangeText={ text => this.setState({ text }) }
                      />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        value={this.state.text}
                        onChangeText={ text => this.setState({ text }) }
                      />
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

export { Login }
