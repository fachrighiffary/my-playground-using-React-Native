import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.fontHeader}>WELCOME TO MY PLAYGROUND</Text>
        </View>
      </SafeAreaView>

      {/* Body */}
      <ScrollView>
        <TouchableOpacity
          style={{...styles.btn, backgroundColor: 'lightgrey'}}
          onPress={() => {
            navigation.navigate('ToastMessage');
          }}>
          <Text style={{color: 'black'}}>Test Toast Message</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.btn, backgroundColor: 'lightgrey'}}
          onPress={() => {
            navigation.navigate('CameraGalery');
          }}>
          <Text style={{color: 'black'}}>Test Camera And Galery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.btn, backgroundColor: 'lightgrey'}}
          onPress={() => {
            navigation.navigate('Loading');
          }}>
          <Text style={{color: 'black'}}>Test Loading</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.btn, backgroundColor: 'lightgrey'}}
          onPress={() => {
            navigation.navigate('TestNotification');
          }}>
          <Text style={{color: 'black'}}>Test Notification</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.btn, backgroundColor: 'lightgrey'}}
          onPress={() => {
            navigation.navigate('CustomFonts');
          }}>
          <Text style={{color: 'black'}}>Custom Fonts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.btn, backgroundColor: 'lightgrey'}}
          onPress={() => {
            navigation.navigate('ViewAndZoom');
          }}>
          <Text style={{color: 'black'}}>View and zoom Image</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 20,
  },
  fontHeader: {
    fontSize: 20,
  },
  btn: {
    alignSelf: 'center',
    borderRadius: 10,
    height: 40,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});