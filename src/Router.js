import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home';
import ToastMessage from './toastMessage';
import Loading from './loading';
import CameraGalery from './cameraGalery';
import NotificationTest from './notificationTest';
import CustomFonts from './customFonts';
import ViewAndZoom from './viewAndZoom';
import HeaderAnsena from './headerAnsena';
import PlayDirection from './playDirection';
import FlatlistCarousel from './flatlistCarousel';
import SnapCarousel from './snapCarousel';
import SwipeTinder from './swipeTinder';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ToastMessage"
          component={ToastMessage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CameraGalery"
          component={CameraGalery}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TestNotification"
          component={NotificationTest}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CustomFonts"
          component={CustomFonts}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ViewAndZoom"
          component={ViewAndZoom}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HeaderAnsena"
          component={HeaderAnsena}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PlayDirection"
          component={PlayDirection}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="flatlistCarousel"
          component={FlatlistCarousel}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="snapCarousel"
          component={SnapCarousel}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="swipetinder"
          component={SwipeTinder}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
