import React , {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';

import {Header} from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCxGKVf9ZNhiNv3rHPgv-3v6W1Sk-3wtUg",
            authDomain: "authentication-project-b68a0.firebaseapp.com",
            databaseURL: "https://authentication-project-b68a0.firebaseio.com",
            storageBucket: "authentication-project-b68a0.appspot.com",
            messagingSenderId: "420591388476"
        });
}
    render() {
        return  (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        );
    }
}
