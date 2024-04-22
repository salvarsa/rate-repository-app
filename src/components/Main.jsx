import React from 'react';
import { Text, View } from 'react-native';
import RepositoryList from './RepositoryList.jsx';
import AppBar from './AppBar.jsx';
import { Switch} from 'react-router-native'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar/>
      <Switch></Switch>
      <RepositoryList />
    </View>
  );
};

export default Main;
