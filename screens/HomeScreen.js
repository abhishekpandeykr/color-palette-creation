import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLOR_PALETTES } from '../utils/colors';
import PalettePreview from '../components/PallettePreview';

const Home = ({ navigation, route }) => {
  const newColor = route.params ? route.params.newColorPalette : undefined;
  const [colorPalette, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setIsRefreshing(false);
  }, []);

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (result.ok) {
      const palettes = await result.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  useEffect(() => {
    if (newColor) {
      setColorPalettes((palettes) => [newColor, ...palettes]);
    }
  }, [newColor]);

  return (
    <FlatList
      data={colorPalette}
      keyExtractor={(item) => item.paletteName}
      style={styles.list}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          colorPalette={item}
        />
      )}
      ListHeaderComponent={
        <TouchableOpacity onPress={() => navigation.navigate('PaletteModal')}>
          <Text style={styles.buttonText}>Add a Color Scheme</Text>
        </TouchableOpacity>
      }
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal',
    marginBottom: 10,
  },
});

export default Home;
