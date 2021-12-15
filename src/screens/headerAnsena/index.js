import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './profile';
import Job from './job';
import Event from './event';
import Hrd from './hrd';

const Tab = createMaterialTopTabNavigator();

const HeaderAnsena = () => {
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.header}>
            <View style={{ height: 25, width: 25, backgroundColor: 'pink' }} />
            <View style={{ flexDirection: 'row' }}>
              <Text>
                Hello
                <Text style={{ fontWeight: 'bold' }}> Admin</Text>
              </Text>
              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => alert()}>
                <View
                  style={{ height: 25, width: 25, backgroundColor: 'pink' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>

        <Tab.Navigator
          initialRouteName="job"
          tabBarPosition="top"
          tabBarOptions={{
            upperCaseLabel: false,
            showIcon: true,

            labelStyle: { fontSize: 14, textTransform: 'none' },
            tabStyle: {
              paddingTop: 0,
              paddingBottom: 20,
              borderRadius: 20,
            },
            indicatorStyle: {
              height: 30,
              backgroundColor: 'white',
              borderRadius: 20,
            },
            style: {
              backgroundColor: '#D9D8DD',
              marginTop: 15,
              borderRadius: 20,
              height: 30,
            },
          }}>
          <Tab.Screen
            name="profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
            }}
          />
          <Tab.Screen
            name="job"
            component={Job}
            options={{
              tabBarLabel: 'Job',
            }}
          />
          <Tab.Screen
            name="event"
            component={Event}
            options={{
              tabBarLabel: 'Event',
            }}
          />
          <Tab.Screen
            name="hrd"
            component={Hrd}
            options={{
              tabBarLabel: 'Hrd',
            }}
          />
        </Tab.Navigator>
      </View>
    </>
  );
};

export default HeaderAnsena;

const styles = StyleSheet.create({
  header: {
    height: 45,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 40,
  },
  bell: {
    height: 20,
    width: 20,
  },
  container: {
    backgroundColor: '#efeff4',
    flex: 1,
    paddingTop: 10,
    position: 'relative',
    paddingHorizontal: 20,
  },
});
