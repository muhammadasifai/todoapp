import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TodoScreen from './src/screen/TodoScreen';
const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <TodoScreen />
      </View>
    </SafeAreaView>
  )
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
});