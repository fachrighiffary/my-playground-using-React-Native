import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';

const Home = ({ navigation }) => {

  const data = [
    
    { id: 1, title: 'ToastMessage' },
    { id: 2, title: 'CameraGalery' },
    { id: 3, title: 'Loading' },
    { id: 4, title: 'CustomFonts' },
    { id: 5, title: 'ViewAndZoom' },
    { id: 6, title: 'HeaderAnsena' },
    { id: 7, title: 'PlayDirection' },
    { id: 8, title: 'flatlistCarousel' },
    { id: 9, title: 'snapCarousel' },
    { id: 10, title: 'swipetinder' },
    { id: 11, title: 'fadeanimation' },
    { id: 12, title: 'share' },
    { id: 13, title: 'multilang' },
    { id: 14, title: 'btmSheet' },
    { id: 15, title: 'flipcard' },
    { id: 16, title: 'TestNotification' },
    { id: 17, title: 'PdfSignature' },
    { id: 17, title: 'None' },
  ]


  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.fontHeader}>WELCOME TO MY PLAYGROUND</Text>
        </View>
      </SafeAreaView>
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 30 }}
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              style={{ ...styles.btn, backgroundColor: 'white' }}
              onPress={() => {
                navigation.navigate(item.title);
              }}>
              <Text style={{ color: 'black' }}>{item.title.toUpperCase()}</Text>
            </TouchableOpacity>
          )
        }}

      />
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
  flexDir: { flexDirection: 'row', justifyContent: 'space-around' },
});
