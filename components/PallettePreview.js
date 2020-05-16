import React from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const PalettePreview = ({ handlePress, colorPalette }) => {
  console.log(colorPalette);
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{colorPalette.paletteName}</Text>
      <FlatList
        horizontal={true}
        style={styles.list}
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <View style={[{ backgroundColor: item.hexCode }, styles.box]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  box: {
    height: 30,
    width: 30,
    marginRight: 10,
    elevation: 3,
  },
  list: {
    marginBottom: 20,
  },
});

export default PalettePreview;
