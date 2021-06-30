import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';

import {SignIn, CreateAccount } from './Screens';

const AuthStack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name="Sign In" component={SignIn} />
            <AuthStack.Screen name="Create Account" component={CreateAccount} />
        </AuthStack.Navigator>
    </NavigationContainer>
)