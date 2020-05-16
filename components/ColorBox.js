import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ color, colorCode }) => {
  const style = {
    backgroundColor: colorCode,
  };
  const textColor = {
    color:
      parseInt(colorCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.box, style]}>
      <Text style={textColor}>Hello Abhishek, what you want to do-{color}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  boxText: {
    color: 'white',
  },
});

export default ColorBox;
