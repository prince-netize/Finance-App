import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/Navigation/AuthStackNavigator';
export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
