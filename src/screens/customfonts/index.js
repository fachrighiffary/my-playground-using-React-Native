import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const CustomFonts = () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.txt}>Custom Fonts</Text>
        </View>
      </SafeAreaView>
      <View style={styles.body}>
        <Text
          style={{fontFamily: 'After Shok', fontSize: 20, marginBottom: 20}}>
          After Shok
        </Text>
        <Text
          style={{fontFamily: 'Art Brewery', fontSize: 20, marginBottom: 20}}>
          Art Brewery
        </Text>
        <Text
          style={{
            fontFamily: 'Berdiri Sendiri Italic',
            fontSize: 20,
            marginBottom: 20,
          }}>
          Berdiri Sendiri Italic
        </Text>
        <Text
          style={{
            fontFamily: 'Berdiri Sendiri',
            fontSize: 20,
            marginBottom: 20,
          }}>
          Berdiri Sendiri
        </Text>
        <Text style={{fontFamily: 'Madina', fontSize: 20, marginBottom: 20}}>
          Madina
        </Text>
      </View>
    </View>
  );
};

export default CustomFonts;

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
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
