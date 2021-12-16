import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import ToastMessage from './screens/toastMessage';
import Loading from './screens/loading';
import CameraGalery from './screens/cameraGalery';
import NotificationTest from './screens/notificationTest';
import CustomFonts from './screens/customfonts';
import ViewAndZoom from './screens/viewAndZoom';
import HeaderAnsena from './screens/headerAnsena';
import PlayDirection from './screens/playDirection';
import FlatlistCarousel from './screens/flatlistCarousel';
import SnapCarousel from './screens/snapCarousel';
import SwipeTinder from './screens/swipeTinder';
import FlipCard from './screens/flipCard';
import FadeAnimation from './screens/fadeAnimation';
import TimerCountdown from './screens/timerCountdown';
import ShareScreen from './screens/share';
import MultiLanguage from './screens/multilanguage';
import BottomSheet from './screens/bottomSheet';
import Home from './screens/home';
import PdfSignature from './screens/pdfSignature';

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
        <Stack.Screen
          name="flipcard"
          component={FlipCard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="fadeanimation"
          component={FadeAnimation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="timer"
          component={TimerCountdown}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="share"
          component={ShareScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="multilang"
          component={MultiLanguage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="btmSheet"
          component={BottomSheet}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PdfSignature"
          component={PdfSignature}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
