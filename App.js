import React, {Fragment} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import Alerts from './src/components/Alerts/Alerts';
import {connect} from 'react-redux';
import Router from "./src/Router";


const App = ({alerts}) => {
    return (
        <Fragment>
            <SafeAreaView style={styles.container}>
                <Router/>
            </SafeAreaView>
            <Alerts alerts={alerts}/>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }
});

const mapStateToProps = state => ({
    alerts: state.alerts
});

export default connect(mapStateToProps)(App);
