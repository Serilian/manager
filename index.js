import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDkVC1BIRNaMVIzuC5_IcGf-MRI5lWHOZs",
    authDomain: "rnmanager-31490.firebaseapp.com",
    databaseURL: "https://rnmanager-31490.firebaseio.com",
    projectId: "rnmanager-31490",
    storageBucket: "",
    messagingSenderId: "693198825150",
    appId: "1:693198825150:web:e0ee83cd46dcc1b5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default app;

AppRegistry.registerComponent(appName, () => app);
