import React from 'react';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
    <StatusBar style='ligth'/>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
}

