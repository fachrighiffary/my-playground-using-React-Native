import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';

const CameraGalery = () => {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState(null);

  const pickSingleWithCamera = (cropping, mediaType = 'photo') => {
    ImagePicker.openCamera({
      cropping: cropping,
      useFrontCamera: true,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    })
      .then(image => {
        console.log('received image', image);
        setImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        setImages(null);
      })
      .catch(e => alert(e));
  };

  const pickMultiple = () => {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: 'desc',
      includeExif: true,
      forceJpg: true,
    })
      .then(images => {
        setImage(null);
        setImages(
          images.map(i => {
            console.log('received image', i);
            return {
              uri: i.path,
              width: i.width,
              height: i.height,
              mime: i.mime,
            };
          }),
        );
      })
      .catch(e => alert(e));
  };

  const pickSingleBase64 = cropit => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      includeBase64: true,
      includeExif: true,
    })
      .then(image => {
        console.log('received base64 image');
        this.setState({
          image: {
            uri: `data:${image.mime};base64,` + image.data,
            width: image.width,
            height: image.height,
          },
          images: null,
        });
      })
      .catch(e => alert(e));
  };

  const cleanupImages = () => {
    ImagePicker.clean()
      .then(() => {
        console.log('removed tmp images from tmp directory');
        setImages(null);
        setImage(null);
      })
      .catch(e => {
        alert(e);
      });
  };

  const cleanupSingleImage = () => {
    let img = image || (images && images.length ? images[0] : null);
    console.log('will cleanup image', image);

    ImagePicker.cleanSingle(img ? img.uri : null)
      .then(() => {
        console.log(`removed tmp image ${img.uri} from tmp directory`);
        setImage(null);
      })
      .catch(e => {
        alert(e);
      });
  };

  const cropLast = () => {
    if (!this.state.image) {
      return Alert.alert(
        'No image',
        'Before open cropping only, please select image',
      );
    }

    ImagePicker.openCropper({
      path: this.state.image.uri,
      width: 200,
      height: 200,
    })
      .then(image => {
        console.log('received cropped image', image);
        setImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        setImages(null);
      })
      .catch(e => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  };

  const pickSingle = (cropit, circular = false, mediaType) => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: circular,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then(image => {
        console.log('received image', image);
        setImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        setImages(null);
      })
      .catch(e => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  };

  const renderVideo = video => {
    console.log('rendering video');
    return (
      <View style={{height: 300, width: 300, alignSelf: 'center'}}>
        <Video
          source={{uri: video.uri, type: video.mime}}
          style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          rate={1}
          paused={false}
          volume={1}
          muted={false}
          resizeMode={'cover'}
          onError={e => console.log(e)}
          onLoad={load => console.log(load)}
          repeat={true}
        />
      </View>
    );
  };

  const renderImage = image => {
    return (
      <Image
        style={{
          width: 300,
          height: 300,
          resizeMode: 'contain',
          marginBottom: 20,
        }}
        source={image}
      />
    );
  };

  const renderAsset = image => {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return renderVideo(image);
    }

    return renderImage(image);
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text>Camera & Galery</Text>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View nestedScrollEnabled={true} horizontal={true}>
          {image ? renderAsset(image) : null}
          {images
            ? images.map(i => <View key={i.uri}>{renderAsset(i)}</View>)
            : null}
        </View>

        <TouchableOpacity
          onPress={() => pickSingleWithCamera(false)}
          style={[styles.button, {marginTop: 40}]}>
          <Text style={styles.text}>Select Single Image With Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pickSingleWithCamera(false, (mediaType = 'video'))}
          style={{...styles.button, backgroundColor: 'red'}}>
          <Text style={styles.text}>Select Single Video With Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pickSingleWithCamera(true)}
          style={styles.button}>
          <Text style={styles.text}>
            Select Single With Camera With Cropping
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pickSingle(false)}
          style={styles.button}>
          <Text style={styles.text}>Select Single</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => cropLast()} style={styles.button}>
          <Text style={styles.text}>Crop Last Selected Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pickSingleBase64(false)}
          style={styles.button}>
          <Text style={styles.text}>Select Single Returning Base64</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pickSingle(true)}
          style={styles.button}>
          <Text style={styles.text}>Select Single With Cropping</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pickSingle(true, true)}
          style={styles.button}>
          <Text style={styles.text}>Select Single With Circular Cropping</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pickMultiple} style={styles.button}>
          <Text style={styles.text}>Select Multiple</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cleanupImages} style={styles.button}>
          <Text style={styles.text}>Cleanup All Images</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cleanupSingleImage} style={styles.button}>
          <Text style={styles.text}>Cleanup Single Image</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CameraGalery;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: '#B3EA15',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  button: {
    height: 40,
    width: 250,
    backgroundColor: 'grey',
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: 'white',
  },
});
