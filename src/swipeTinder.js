import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  PanResponder,
  TouchableOpacity,
} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const DATA = [
  {id: 1, name: 'Fachri', clr: 'red'},
  {id: 2, name: 'Ghiffary', clr: 'blue'},
  {id: 3, name: 'James', clr: 'grey'},
  {id: 4, name: 'Potter', clr: 'green'},
  {id: 5, name: 'Ron', clr: 'purple'},
];

class SwipeTinder extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };

    this.position = new Animated.ValueXY();

    this.imageRotate = this.position.x.interpolate({
      inputRange: [-Width / 2, 0, Width / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp',
    });

    this.nextImageOpacity = this.position.x.interpolate({
      inputRange: [-Width / 2, 0, Width / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp',
    });

    this.nextImageScale = this.position.x.interpolate({
      inputRange: [-Width / 2, 0, Width / 2],
      outputRange: [1, 0.9, 1],
      extrapolate: 'clamp',
    });

    this.imageRotateAndTranslate = {
      transform: [
        {
          rotate: this.imageRotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (ev, gestureState) => true,
      onPanResponderMove: (ev, gestureState) => {
        this.position.setValue({x: gestureState.dx, y: 0});
      },
      onPanResponderRelease: (ev, gestureState) => {
        if (gestureState.dx > 200) {
          Animated.spring(this.position, {
            useNativeDriver: true,
            toValue: {x: Width + 400, y: -100},
          }).start(() => {
            this.setState(
              {
                currentIndex: this.state.currentIndex + 1,
              },
              () => {
                this.position.setValue({x: 0, y: 0});
              },
            );
          });
        } else if (gestureState.dx < -200) {
          Animated.spring(this.position, {
            useNativeDriver: true,
            toValue: {x: -Width - 400, y: -100},
          }).start(() => {
            this.setState(
              {
                currentIndex: this.state.currentIndex + 1,
              },
              () => {
                this.position.setValue({x: 0, y: 0});
              },
            );
          });
        } else {
          Animated.spring(this.position, {
            useNativeDriver: true,
            toValue: {x: 0, y: 0},
          }).start();
        }
      },
    });
  }

  renderImages = () => {
    return DATA.map(({name, id, clr}, i) => {
      if (i < this.state.currentIndex) {
        return null;
      } else if (i === this.state.currentIndex) {
        return (
          <Animated.View
            {...this.panResponder.panHandlers}
            key={id}
            style={[
              this.imageRotateAndTranslate,
              {
                height: Height - 140,
                width: Width,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 15,
              },
            ]}>
            <View
              style={{
                flex: 1,
                width: Width - 40,
                height: null,
                borderRadius: 15,
                backgroundColor: clr,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: -100,
                position: 'relative',
              }}>
              <Text
                style={{
                  marginLeft: -300,
                  fontSize: 100,
                  transform: [{rotate: '-10deg'}],
                  color: 'white',
                }}>
                Truth
              </Text>
              <Text
                style={{
                  marginRight: -300,
                  fontSize: 100,
                  transform: [{rotate: '10deg'}],
                  color: 'white',
                }}>
                Dare
              </Text>
            </View>
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            {...this.panResponder.panHandlers}
            key={id}
            style={{
              height: Height - 140,
              width: Width,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 15,
              opacity: this.nextImageOpacity,
              transform: [
                {
                  scale: this.nextImageScale,
                },
              ],
            }}>
            <View
              style={{
                flex: 1,
                width: Width - 40,
                height: null,
                borderRadius: 15,
                backgroundColor: clr,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: -100,
                position: 'relative',
              }}>
              <Text
                style={{
                  marginLeft: -300,
                  fontSize: 100,
                  transform: [{rotate: '-10deg'}],
                  color: 'white',
                }}>
                Truth
              </Text>
              <Text
                style={{
                  marginRight: -300,
                  fontSize: 100,
                  transform: [{rotate: '10deg'}],
                  color: 'white',
                }}>
                Dare
              </Text>
            </View>
          </Animated.View>
        );
        // return null;
      }
    }).reverse();
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{height: 60}} />
        <View style={{flex: 1}}>
          {this.state.currentIndex === DATA.length ? (
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  currentIndex: 0,
                });
              }}>
              <Text style={{color: 'white', fontSize: 50, alignSelf: 'center'}}>
                Play again
              </Text>
            </TouchableOpacity>
          ) : (
            this.renderImages()
          )}
        </View>
        <View style={{height: 40}} />
      </View>
    );
  }
}

export default SwipeTinder;

const styles = StyleSheet.create({});
