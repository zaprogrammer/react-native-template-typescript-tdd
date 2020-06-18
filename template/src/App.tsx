import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar,} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {AppStackScreen, navigationRef} from 'Navigation'

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <NavigationContainer ref={navigationRef}>
                <AppStackScreen/>
            </NavigationContainer>
        </>
    );
};

export default App;
