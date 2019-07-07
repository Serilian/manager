import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import {CustomButton, Card, CardSection, Input, Spinner} from '../common';
import {connect} from 'react-redux';
import {onLogin, setUser} from "../../store/actions/auth";

const LoginForm = ({onLogin, setUser, loading}) => {

    const [inputData, setInputData] = useState({
        email: '',
        password: ''
    });


    const onChangeEmail = (text) => {
        setInputData({
            ...inputData,
            email: text
        })
    };

    const onChangePassword = (text) => {
        setInputData({
            ...inputData,
            password: text
        })
    };


    useEffect(() => {
            const subscriber = firebase.auth().onAuthStateChanged((user) => {
                setUser(user);
                return subscriber;
            })
        }, [loading]
    );


    const loginHandler = ()=> {
        onLogin(inputData.email, inputData.password);
    };

    const renderButton = () => {
        if (loading) {
            return <Spinner size="small"/>;
        }

        return (
            <CustomButton onPress={() => loginHandler()}>
                Log in
            </CustomButton>
        );
    };

    return (
        <Card>
            <CardSection>
                <Input
                    placeholder="user@gmail.com"
                    label="Email"
                    name="email"
                    value={inputData.email}
                    onChangeText={text => onChangeEmail(text)}
                />
            </CardSection>

            <CardSection>
                <Input
                    secureTextEntry
                    placeholder="password"
                    label="Password"
                    name="password"
                    value={inputData.password}
                    onChangeText={(text) => onChangePassword(text)}
                />
            </CardSection>

            <Text style={styles.errorTextStyle}>
                {null}
            </Text>
            <CardSection>
                {renderButton()}
            </CardSection>
            <CardSection>
                <CustomButton onPress={() => firebase.auth().signOut()}>
                    Log out
                </CustomButton>
            </CardSection>
        </Card>
    );
};


const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => ({
   loading: state.ui.loading
});

export default connect(mapStateToProps, {onLogin, setUser})(LoginForm);
