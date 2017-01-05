import React , {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';

import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    state = {loggedIn: null};

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyCxGKVf9ZNhiNv3rHPgv-3v6W1Sk-3wtUg",
            authDomain: "authentication-project-b68a0.firebaseapp.com",
            databaseURL: "https://authentication-project-b68a0.firebaseio.com",
            storageBucket: "authentication-project-b68a0.appspot.com",
            messagingSenderId: "420591388476"
        };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }

        });

}
    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log out
                    </Button>)
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return  (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    };
}
