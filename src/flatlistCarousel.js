import React, {useState, useRef, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  LogBox,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';

const DeviceWidth = Dimensions.get('window').width;
console.log(DeviceWidth);
const DeviceHeight = Dimensions.get('window').height;

const data = [
  {
    uri: 'https://i.imgur.com/GImvG4q.jpg',
    title: 'Lorem ipsum dolor sit amet',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  },
  {
    uri: 'https://i.imgur.com/Pz2WYAc.jpg',
    title: 'Lorem ipsum ',
    content: 'Neque porro quisquam est qui dolorem ipsum ',
  },
  {
    uri: 'https://i.imgur.com/IGRuEAa.jpg',
    title: 'Lorem ipsum dolor',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  },
  {
    uri: 'https://i.imgur.com/fRGHItn.jpg',
    title: 'Lorem ipsum dolor',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
  },
  {
    uri: 'https://i.imgur.com/WmenvXr.jpg',
    title: 'Lorem ipsum ',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor ',
  },
];

const SPACING = 10;
const ITEM_SIZE = DeviceWidth * 0.72;
const SPACER_ITEM_SIZE = (DeviceWidth - ITEM_SIZE) / 2;

const FlatlistCarousel = () => {
  LogBox.ignoreAllLogs();
  useEffect(() => {
    setList([{key: 'left-spacer'}, ...data, {key: 'right-spacer'}]);
  }, []);

  const [list, setList] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;
  const animatedSize = useRef(new Animated.Value(ITEM_SIZE - 100)).current;
  const carouselRef = useRef(null);
  const renderItem = ({item, index}) => {
    const {uri, title, content} = item;
    if (!item.uri) {
      return null;
    }
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        <ImageBackground source={{uri: uri}} style={styles.imageBackground}>
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>Lorem</Text>
          </View>
        </ImageBackground>
        <View style={styles.lowerContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Carousel
        initialIndex={1}
        style={styles.carousel}
        data={list}
        renderItem={renderItem}
        itemWidth={DeviceWidth - 150}
        inActiveOpacity={0.3}
        separatorWidth={0}
        containerWidth={DeviceWidth}
      />
    </View>
  );
};

export default FlatlistCarousel;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    flex: 0.6,
    borderRadius: 5,
    borderColor: 'white',
    // elevation: 3,
    alignSelf: 'center',
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',
    borderWidth: 5,
    borderColor: 'white',
  },
  rightTextContainer: {
    marginLeft: 'auto',
    marginRight: -2,
    backgroundColor: 'rgba(49, 49, 51,0.5)',
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  rightText: {color: 'white'},
  lowerContainer: {
    flex: 1,
    margin: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentText: {
    marginTop: 10,
    fontSize: 12,
  },
});
