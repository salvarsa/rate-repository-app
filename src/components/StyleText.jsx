import React, { Children } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {theme} from '../theme.js';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textprimary,
    fontSize: theme.fontSize.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSize.subHeading,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
});

export default function StyleText({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) {
  const textStyle = [
    styles.text,
    restOfProps.align === 'center' && styles.textAlignCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    style,
  ];

  return (
    <Text style={textStyle} {...restOfProps}>
      {children}
    </Text>
  );
}
