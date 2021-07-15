import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ActionSheet = () => {
  const [alignment] = useState(new Animated.Value(0));
  const [value, setValue] = useState(0);
  console.log(value);

  const bringUpActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const bringDownActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const actionSheetInterpolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [-Height / 5 + 50, 0],
  });

  const actionSheetStyle = {
    bottom: actionSheetInterpolate,
  };

  return (
    <Animated.View style={[styles.container, actionSheetStyle]}>
      <View style={{height: 50}}>
        <View style={styles.grabber} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          overScrollMode="always"
          onScroll={e => {
            console.log(Math.floor(e.nativeEvent.contentOffset.y));
            setValue(Math.floor(e.nativeEvent.contentOffset.y));
            if (Math.floor(e.nativeEvent.contentOffset.y) > 0) {
              bringUpActionSheet();
            } else if (Math.floor(e.nativeEvent.contentOffset.y) < 34) {
              bringDownActionSheet();
            }
          }}>
          <View style={{height: 70, backgroundColor: 'tranparent'}} />
        </ScrollView>
      </View>
      <ScrollView
        style={{paddingHorizontal: 20}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
      </ScrollView>
    </Animated.View>
  );
};

export default ActionSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E4E7EB',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: Height / 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  grabber: {
    alignSelf: 'center',
    marginTop: 10,
    width: 100,
    borderTopWidth: 5,
    borderTopColor: '#9369A8',
  },
  card: {
    height: 80,
    width: 80,
    backgroundColor: 'red',
    marginRight: 10,
  },
});
