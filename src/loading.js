import {Spinner} from 'native-base';
import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Loading = () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text>Loading Screen</Text>
        </View>
      </SafeAreaView>
      <View style={styles.body}>
        <Text>Default From React native</Text>
        <ActivityIndicator size="large" color="blue" />
        <View style={{height: 50}} />
        <Text>Spinner from native base</Text>
        <Spinner color="red" />
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    backgroundColor: '#B3EA15',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
