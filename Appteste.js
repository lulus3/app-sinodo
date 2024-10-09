import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const App = () => {
  const imageUrl = { uri: 'https://raw.githubusercontent.com/lulus3/Sinodo/main/imagem6.png' };

  return (
    <View style={styles.container}>
      <Image
        source={imageUrl}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default App;