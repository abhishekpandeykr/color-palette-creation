import React, { useState, useCallback } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Switch,
  FlatList,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../utils/colors';

const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert('Please Enter the Palette name');
    } else if (selectedColors.length < 3) {
      Alert.alert('Please Add Atlest 3 colors in the Color Palette');
    } else {
      const newColorPalette = {
        paletteName: name,
        colors: selectedColors,
      };
      navigation.navigate('Home', { newColorPalette });
    }
  }, [name, selectedColors]);

  const handleValueChange = (value, color) => {
    if (value) {
      setSelectedColors((colors) => [...colors, color]);
    } else {
      setSelectedColors((colors) =>
        colors.filter(
          (selectedColor) => color.colorName !== selectedColor.colorName,
        ),
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paletteHeading}>Name of the Palette</Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Enter Palette Name"
        onChangeText={setName}
      />
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={styles.color}>
            <Text>{item.colorName}</Text>
            <Switch
              value={
                !!selectedColors.find(
                  (color) => color.colorName === item.colorName,
                )
              }
              onValueChange={(selected) => {
                handleValueChange(selected, item);
              }}
            />
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttontext}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  container: {
    padding: 15,
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    color: 'white',
    fontWeight: 'bold',
  },
  paletteHeading: {
    marginBottom: 10,
    color: 'green',
  },
  color: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});

export default ColorPaletteModal;
