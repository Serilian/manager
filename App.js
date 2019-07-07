import React, {Fragment} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import {Header} from './src/components/common';
import Alerts from './src/components/Alerts/Alerts';
import {connect} from 'react-redux';


import LoginForm from "./src/components/LoginForm/LoginForm";



const App = ({alerts}) => {
    return (
        <Fragment>
            <SafeAreaView style={styles.container}>
                <Header text="Enter credentials" />
                <Alerts alerts={alerts}/>
                <LoginForm/>
            </SafeAreaView>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',

    }
});

const mapStateToProps = state => ({
    alerts: state.alerts
});

export default connect(mapStateToProps)(App);
