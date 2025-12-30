/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/HomeScreen';

const Tab = createBottomTabNavigator();

function ScreenWrapper() {
  return <View style={{ flex: 1, backgroundColor: '#F8F8F8' }} />;
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Gallery':
              iconName = 'image-outline';
              break;
            case 'Chat':
              iconName = 'chatbubble-outline';
              break;
            case 'More':
              iconName = 'ellipsis-horizontal';
              break;
          }

          return (
            <View style={styles.iconWrapper}>
              <View
                style={[
                  styles.iconContainer,
                  focused && styles.activeIconContainer,
                ]}
              >
                <Ionicons
                  name={iconName}
                  size={focused ? 22 : 24}
                  color={focused ? '#FFFFFF' : '#A1A1AA'}
                />
              </View>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Gallery" component={ScreenWrapper} />
      <Tab.Screen name="Chat" component={ScreenWrapper} />
      <Tab.Screen name="More" component={ScreenWrapper} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    alignSelf: 'center',
    justifyContent: 'center',
    bottom: 14,
    width: '68%',
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },

  iconWrapper: {
    top: 10,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeIconContainer: {
    backgroundColor: '#465EFD',
  },
});
