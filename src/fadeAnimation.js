import React, {useState} from 'react';
import {StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';

const FadeAnimation = () => {
  const opacity = useState(new Animated.Value(0))[0];

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            height: 100,
            width: 100,
            backgroundColor: 'black',
            opacity: opacity,
          },
        ]}
      />
      <TouchableOpacity onPress={fadeIn}>
        <Text>Click to fadeIn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fadeOut}>
        <Text>Click to fadeOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FadeAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
