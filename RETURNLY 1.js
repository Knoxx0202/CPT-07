import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import TitleScreen from './screens/TitleScreen';
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ConfirmationCodeScreen from './screens/ConfirmationCodeScreen';
import WelcomeBackScreen from './screens/WelcomeBackScreen';
import TermsPrivacyScreen from './screens/TermsPrivacyScreen';
import WelcomeFinalScreen from './screens/WelcomeFinalScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Title"
        screenOptions={{
          
          headerShown: false, 
        }}
      >
        <Stack.Screen name="Title" component={TitleScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ConfirmationCode" component={ConfirmationCodeScreen} />
        <Stack.Screen name="WelcomeBack" component={WelcomeBackScreen} />
        <Stack.Screen name="TermsPrivacy" component={TermsPrivacyScreen} />
        <Stack.Screen name="WelcomeFinal" component={WelcomeFinalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}