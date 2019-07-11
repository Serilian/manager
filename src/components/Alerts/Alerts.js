import React from "react";
import {View, Text} from 'react-native';
import PropTypes from "prop-types";


const Alert = ({ alerts, ...props }) => {

    return (
        <View {...props}>
            {alerts !== null && alerts.length > 0 ? alerts.map(alert => (
                <Text style={{backgroundColor: '#555555', padding: 10, color: 'white', textAlign: 'center'}} key={alert.id}>{alert.msg}</Text>)) : null}
        </View>
        );
};

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
};

export default Alert;