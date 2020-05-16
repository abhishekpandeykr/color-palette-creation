import React from 'react';
import { View, FlatList, SafeAreaView, Text, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPaletter = ({ route }) => {
  const { paletteName, colors } = route.params;
  return (
    <View style={styles.container}>
      <Text>Hello Abhishek, Lets Do Something.</Text>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox color={item.colorName} colorCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text>{paletteName}</Text>}
      />
    </View>
  );
};

export default ColorPaletter;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: 'teal',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#d33682',
  },
  areaView: {
    flex: 1,
  },
  boxText: {
    color: 'white',
  },
});
