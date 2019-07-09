import React from "react";
import {View, Text} from 'react-native';
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {

    return (
        <View >
            {alerts !== null && alerts.length > 0 ? alerts.map(alert => (
                <Text style={{backgroundColor: 'red', padding: 10, color: 'white', textAlign: 'center'}} key={alert.id}>{alert.msg}</Text>)) : null}
        </View>
        );
};

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    alerts: state.alerts
});

export default connect(mapStateToProps)(Alert);