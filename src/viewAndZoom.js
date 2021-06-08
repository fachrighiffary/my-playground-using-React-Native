import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const ViewAndZoom = () => {
  const [visible, setIsVisible] = useState(false);
  const [renderImg, setRenderImg] = useState('');
  const images = [
    {
      url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    },
    {
      url: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      url: 'https://i.pinimg.com/originals/a4/f8/f9/a4f8f91b31d2c63a015ed34ae8c13bbd.jpg',
    },
    {
      url: 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg',
    },
  ];

  console.log(images);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.header}>
          <Text style={styles.txt}>INi adalah halaman view and zoom</Text>
        </View>
        <View style={{flex: 1, marginTop: 250}}>
          <FlatList
            horizontal
            keyExtractor={(item, index) => index.toString()}
            data={images}
            renderItem={({item}) => {
              console.log(item.url);
              const img = item.url;
              return (
                <TouchableOpacity
                  style={{marginRight: 10}}
                  onPress={() => {
                    setRenderImg(img);
                    setIsVisible(true);
                  }}>
                  <Image
                    source={{uri: img}}
                    style={{height: 100, width: 100, alignSelf: 'center'}}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      <Modal visible={visible} transparent={true}>
        <ImageViewer
          enableSwipeDown={true}
          useNativeDriver
          imageUrls={[{url: renderImg}]}
          onSwipeDown={() => {
            setIsVisible(false);
          }}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default ViewAndZoom;

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  txt: {
    color: 'black',
  },
});
