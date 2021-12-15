import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Share from 'react-native-share';
import images from '../../images/imagesBase64';

const ShareScreen = () => {
  const [packageSearch, setPackageSearch] = useState('');
  const [recipient, setRecipient] = useState('');
  const [result, setResult] = useState('');

  const checkIfPackageIsInstalled = async () => {
    const { isInstalled } = await Share.isPackageInstalled(packageSearch);

    Alert.alert(
      `Package: ${packageSearch}`,
      `${isInstalled ? 'Installed' : 'Not Installed'}`,
    );
  };

  function getErrorString(error, defaultValue) {
    let e = defaultValue || 'Something went wrong. Please try again';
    if (typeof error === 'string') {
      e = error;
    } else if (error && error.message) {
      e = error.message;
    } else if (error && error.props) {
      e = error.props;
    }
    return e;
  }

  /**
   * This functions share multiple images that
   * you send as the urls param
   */
  const shareMultipleImages = async () => {
    const shareOptions = {
      title: 'Share file',
      failOnCancel: false,
      urls: [images.image1, images.image2],
    };

    // If you want, you can use a try catch, to parse
    // the share response. If the user cancels, etc.
    try {
      const ShareResponse = await Share.open(shareOptions);
      setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error)));
    }
  };

  /**
   * This functions share a image passed using the
   * url param
   */
  const shareEmailImage = async () => {
    const shareOptions = {
      title: 'Share file',
      email: 'email@example.com',
      social: Share.Social.EMAIL,
      failOnCancel: false,
      urls: [images.image1, images.image2],
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error)));
    }
  };

  /**
   * This functions share a image passed using the
   * url param
   */
  const shareSingleImage = async () => {
    const shareOptions = {
      message: 'Ini dari aplikasi yang ku buat gaesss',
      url: images.image2,
      failOnCancel: false,
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error)));
    }
  };

  /**
   * This function shares PDF and PNG files to
   * the Files app that you send as the urls param
   */
  const shareToFiles = async () => {
    const shareOptions = {
      title: 'Share file',
      failOnCancel: false,
      saveToFiles: true,
      urls: [images.image1, images.pdf1], // base64 with mimeType or path to local file
    };

    // If you want, you can use a try catch, to parse
    // the share response. If the user cancels, etc.
    try {
      const ShareResponse = await Share.open(shareOptions);
      setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error)));
    }
  };

  const shareToInstagramStory = async () => {
    const shareOptions = {
      title: 'Share image to instastory',
      backgroundImage: images.image1,
      social: Share.Social.INSTAGRAM_STORIES,
    };

    try {
      const ShareResponse = await Share.shareSingle(shareOptions);
      setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error)));
    }
  };

  const shareSms = async () => {
    const shareOptions = {
      title: '',
      social: Share.Social.SMS,
      recipient,
      message: 'Example SMS',
    };

    try {
      const ShareResponse = await Share.shareSingle(shareOptions);
      setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error)));
    }
  };

  const sharePdfBase64 = async () => {
    const shareOptions = {
      title: '',
      url: pdfBase64,
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('sharePdfBase64 Error =>', error);
      setResult('error: '.concat(getErrorString(error)));
    }
  };

  return (
    <View style={styles.container}>
      <Text>INi adalah halaman Share</Text>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.6}
        onPress={shareSingleImage}>
        <Text style={{ color: 'white' }}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShareScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: 250,
    backgroundColor: 'maroon',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
