import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

const PlayDirection = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text>Ini bagian kiri ketika landscape</Text>
        </View>
        <View>
          <Text>Ini bagian kanan ketika landscape</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlayDirection;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
});
