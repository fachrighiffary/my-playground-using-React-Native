import React, { Component } from 'react'
import { Text, TouchableOpacity, View,StyleSheet, Dimensions, Image } from 'react-native'
import { RNCamera } from 'react-native-camera';
import { IconClose, IconShootCamera } from '../../assets';
import ImageEditor from "@react-native-community/image-editor";

const {height, width} = Dimensions.get('screen')

class ImageCropBoundary extends Component {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 1, base64: false, orientation:'landscapeLeft' };
      const data = await this.camera.takePictureAsync(options);
      console.log(data);
      const { uri, width, height } = data;
      const cropData = {
        offset: {x: 100, y: 50},
        size: {width: width, height: height},
        displaySize: {width: 200, height: 200},
        resizeMode:  'cover',
      };
    //   ImageEditor.cropImage(uri, cropData, (resizedImage) => {
    //     // resizedImage == 'file:///data/.../img.jpg'
    //     alert('okeoke')
    //     console.log(resizedImage);
    //   }, (error) => {
    //     console.error('Error resizing image: ', error.getMessage());
    // });
      this.props.navigation.navigate('ShowImage', data)
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 1,height: height-380/2, width: width, backgroundColor: 'black', opacity: 0.5}} />
            <View style={{flexDirection: 'row'}}>
              <View style={{height: 380, width: width-238/2, backgroundColor: "black", opacity: 0.5}} />
              <View style={{height: 380, width: 238, borderWidth:2 , borderColor: 'white', borderRadius: 10}}></View>
              <View style={{height: 380, width: width-238/2, backgroundColor: "black", opacity: 0.5}} />
            </View>
            <View style={{flex: 1,height: height-380/2, width: width, backgroundColor: 'black', opacity: 0.5, justifyContent: 'space-between', alignItems :'center', flexDirection: 'row', paddingHorizontal: 25, paddingTop: 90}}>
              <View />
              <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                <Image source={IconShootCamera} style={{height: 50, width: 50}} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                this.props.navigation.goBack()
              }}>
                <Image source={IconClose} style={{height: 30, width: 30}} />
              </TouchableOpacity>
            </View>
          </View>
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    alignSelf: 'center',
    margin: 20,
  },
});

export default ImageCropBoundary
