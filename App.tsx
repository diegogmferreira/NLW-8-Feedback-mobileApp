import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, View } from 'react-native';

import Widget from './src/components/Widget';
import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import { theme } from './src/theme';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface Props {
  children: JSX.Element;
}

export function DissmissKeyboard({ children }: Props) {
  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  )

}

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    // <DissmissKeyboard >
      <View style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}>
        <StatusBar
          style="light"
          backgroundColor='transparent'
          translucent
        />

        <Widget />
      </View>
    // </DissmissKeyboard>
  );
}