import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Root, Toast} from 'native-base';

const ToastMessage = () => {
  return (
    <Root>
      <View style={{flex: 1}}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.header}>
            <Text>INi adalah screen toastMessage</Text>
          </View>
        </SafeAreaView>

        {/* Body */}
        <View style={styles.body}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              Toast.show({
                text: 'Wrong password!',
                buttonText: 'Okay',
                duration: 1000,
                position: 'bottom',
              });
            }}>
            <Text>Click me to get Toast Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Root>
  );
};

export default ToastMessage;

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    backgroundColor: 'pink',
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
  btn: {
    height: 50,
    width: 250,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
