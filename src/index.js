import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

const FlipCard = () => {
  const animate = useRef(new Animated.Value(0));
  const [isFlip, setIsFlip] = useState(false);

  const handleFlip = () => {
    Animated.timing(animate.current, {
      duration: 300,
      toValue: isFlip ? 0 : 180,
      useNativeDriver: true,
    }).start(() => {
      setIsFlip(!isFlip);
    });
  };

  const interpolateFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const interpolateBack = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Animated.View
        style={[
          {transform: [{rotateY: checkId != id ? null : interpolateFront}]},
          styles.hidden,
        ]}>
        <TouchableOpacity onPress={handleFlip}>
          <View style={{height: 300, width: 200, backgroundColor: 'blue'}} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          styles.back,
          styles.hidden,
          {transform: [{rotateY: checkId != id ? null : interpolateBack}]},
        ]}>
        <TouchableOpacity onPress={handleFlip}>
          <View style={{height: 300, width: 200, backgroundColor: 'red'}} />
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default FlipCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hidden: {
    backfaceVisibility: 'hidden',
  },
  back: {
    position: 'absolute',
  },
});
