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
      <ScrollView style={{paddingHorizontal: 20}}>
        <View style={styles.flexDir}>
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
        </View>

        <View style={styles.flexDir}>
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
        </View>

        <View style={styles.flexDir}>
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
        </View>

        <View style={styles.flexDir}>
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: 'lightgrey'}}
            onPress={() => {
              navigation.navigate('HeaderAnsena');
            }}>
            <Text style={{color: 'black'}}>Header Ansena app</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{...styles.btn, backgroundColor: 'lightgrey'}}
            onPress={() => {
              navigation.navigate('PlayDirection');
            }}>
            <Text style={{color: 'black'}}>Play Direction View</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.flexDir}>
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: 'lightgrey'}}
            onPress={() => {
              navigation.navigate('flatlistCarousel');
            }}>
            <Text style={{color: 'black'}}>Flatlist Carousell</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{...styles.btn, backgroundColor: 'lightgrey'}}
            onPress={() => {
              navigation.navigate('snapCarousel');
            }}>
            <Text style={{color: 'black'}}>SnapCarousel Carousell</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.flexDir}>
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: 'lightgrey'}}
            onPress={() => {
              navigation.navigate('swipetinder');
            }}>
            <Text style={{color: 'black'}}>Swipe Deck Tinder</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: 'lightgrey'}}
            onPress={() => {
              navigation.navigate('flipcard');
            }}>
            <Text style={{color: 'black'}}>Flip Card</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.flexDir}>
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: 'lightgrey'}}
            onPress={() => {
              navigation.navigate('fadeanimation');
            }}>
            <Text style={{color: 'black'}}>Fade In, Fade Out Animation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: 'lightgrey'}}
            onPress={() => {
              navigation.navigate('timer');
            }}>
            <Text style={{color: 'black'}}>Timer Countdown</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.flexDir}>
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: 'lightgrey'}}
            onPress={() => {
              navigation.navigate('share');
            }}>
            <Text style={{color: 'black'}}>Share </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: 'lightgrey'}}
            onPress={() => {
              navigation.navigate('multilang');
            }}>
            <Text style={{color: 'black'}}>Multi language</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.flexDir}>
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: 'lightgrey'}}
            onPress={() => {
              navigation.navigate('btmSheet');
            }}>
            <Text style={{color: 'black'}}>Bottom Sheet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: 'lightgrey'}}>
            <Text style={{color: 'black'}}>None</Text>
          </TouchableOpacity>
        </View>
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
    height: 100,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  flexDir: {flexDirection: 'row', justifyContent: 'space-around'},
});
