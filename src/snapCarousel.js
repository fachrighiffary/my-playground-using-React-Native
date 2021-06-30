import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, Image} from 'react-native';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json
import {BGMenu, BGMenu2, BGMenu3, Logo} from './assets';

import {scrollInterpolator, animatedStyles} from './utils/animations';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = 190;
const ITEM_HEIGHT = 316;

const DATA = [
  {id: 1, name: 'Buka Mana', img: BGMenu},
  {id: 2, name: 'Truth Or Dare', img: BGMenu2},
  {id: 3, name: 'Buka Cepat', img: BGMenu3},
];
//for (let i = 0; i < 3; i++) {
//  DATA.push(i)
//}

export default class SnapCarousel extends Component {
  state = {
    name: 'Buka Mana',
  };

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({item}) {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.img} style={{height: '100%', width: '100%'}} />
      </View>
    );
  }

  getName = index => {
    const obj = DATA.find(v => v.id === index + 1);
    this.setState({
      name: obj.name,
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 67,
            width: '100%',
            alignItems: 'center',
            backgroundColor: 'grey',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <Image source={Logo} style={{height: 25, width: 109}} />
        </View>
        <View style={{flex: 1, alignItems: 'center', marginTop: 100}}>
          <Carousel
            layout={'default'}
            ref={c => (this.carousel = c)}
            data={DATA}
            renderItem={this._renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            containerCustomStyle={styles.carouselContainer}
            inactiveSlideShift={10}
            // enableSnap={true}
            onSnapToItem={index => {
              this.getName(index);
            }}
            scrollInterpolator={scrollInterpolator}
            slideInterpolatedStyle={animatedStyles}
            useScrollView={true}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.innerFooter}>
            <Text style={styles.counter}>{this.state.name}</Text>
            <Text>
              In Buka Mana, you will choose one of the two available options.
              So, don't choose the wrong one!
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {},
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'dodgerblue',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  footer: {
    paddingTop: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 193,
    backgroundColor: 'purple',
  },
  innerFooter: {
    paddingLeft: 10,
    padding: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
