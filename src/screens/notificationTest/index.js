import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { showNotification } from '../../utils/notification.android';

const NotificationTest = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.txt}>Notification Test</Text>
        </View>
      </SafeAreaView>
      <View style={styles.body}>
        <TouchableOpacity style={styles.btn} activeOpacity={0.6} onPress={() => {
          showNotification('hello', 'Local Notification')
        }}>
          <Text>Push Local Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>Push Remote Notification</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationTest;

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1544EA',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  txt: {
    color: 'white',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: 250,
    backgroundColor: 'lightgrey',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
