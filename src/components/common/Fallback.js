import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets/images';

const Fallback = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.TodoList} style={styles.image} />
      <Text>Add Your Task</Text>
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 300,
  },
});
