import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import StyleText from './StyleText.jsx';
import RepositoryStats from './RepositoryStats.jsx';
import { theme } from '../theme.js';

const RepositoryItemHeader = ({ownerAvatarUrl, fullName, description, language}) => (
  <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
    <Image style={styles.image} source={{ uri: ownerAvatarUrl }}/>
    </View>
    <View style={{ flexGrow: 1}}>
      <StyleText fontSize="subheading" fontWeight="bold">{' '}{fullName}{' '}</StyleText>
      <StyleText>{description}</StyleText>
      <StyleText style={styles.language}>{language}</StyleText>
    </View>
  </View>
)

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.constainer}>
    <RepositoryItemHeader {...props}/>
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  constainer: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 20,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
  },
  
});

export default RepositoryItem;
