import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ActionSheet from './components/actionSheet';

const {Width, Height} = Dimensions.get('screen');

const BottomSheet = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text>INi adalah btm Sheet</Text>
      </View>
      <ActionSheet />
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
