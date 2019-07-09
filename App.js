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
import Router from "./src/Router";


import LoginForm from "./src/components/LoginForm/LoginForm";



const App = ({alerts}) => {
    return (
        <Fragment>
            <SafeAreaView style={styles.container}>
                <Alerts alerts={alerts}/>
                <Router/>
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
