import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from '.';

class Login extends Component {
    state = { email: '', password: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        value={this.state.text}
                        onChangeText={ email => this.setState({ email }) }
                        placeholder="user@domain.com"
                      />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        value={this.state.text}
                        onChangeText={ password => this.setState({ password }) }
                        placeholder="Enter Password"
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
