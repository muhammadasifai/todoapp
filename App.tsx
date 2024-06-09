import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TodoScreen from './src/screen/TodoScreen';
import TodoScreenTest1 from './src/screen/TodoScreenTest1';
const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <TodoScreen />
        {/* <TodoScreenTest1 /> */}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
