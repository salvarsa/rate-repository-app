import React from 'react';
import { Text, View } from 'react-native';
import RepositoryList from './RepositoryList.jsx';

const Main = () => {
  return (
    <View style={{ marginTop: 50, flexGrow: 1 }}>
      <Text>Rate reppository app</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;
