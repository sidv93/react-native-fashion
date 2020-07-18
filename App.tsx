import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/authentication/onboarding';
import { LoadAssets } from './src/components';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const fetchFonts = () => {
  return Font.loadAsync(fonts);
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
  const [dataLoaded, setDataLoaded] = useState(false);
  if(!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }
  return (
    <LoadAssets>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}

