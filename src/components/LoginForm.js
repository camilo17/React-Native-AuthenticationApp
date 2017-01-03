import React, {Component} from 'react';
import {
    View,
    TextInput
} from 'react-native';

import {Button, Card, CardSection, Input} from './common';

export default class LoginForm extends Component {

    state = { email: ''};


    render()  {
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email:"
                        value={this.state.email}
                        onChangeText={email => this.setState({email: email})}
                    />

                </CardSection>

                <CardSection>

                </CardSection>


                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>

            </Card>
        )
    }
}