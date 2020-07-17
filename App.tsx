import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/authentication/onboarding';
import { LoadAssets } from './src/components';

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="onboarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  )
}

export default function App() {
  return (
    <LoadAssets>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}

