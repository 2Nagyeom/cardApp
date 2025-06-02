import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          position: Platform.OS === 'ios' ? 'absolute' : 'relative',
          borderColor : '#A2D2FF',
          alignItems : 'center',
        },
        tabBarIconStyle : {
          marginTop : 8,
        },
        tabBarLabelStyle : {
          marginTop : 4,
        }
      }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Camera"
        options={{
          title: '',
          tabBarIcon: ({}) => 
          <View style={{ justifyContent : 'center', alignItems : 'center', marginBottom : 20, width : 90, height : 90, borderRadius : 50, backgroundColor : '#10375C'}}>
            <Image source={require('@/assets/icons/tab_cameraIcon.png')} style={{ alignSelf: 'center', width : 64, height : 64, marginVertical : 4}} />
          </View>
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.2.circle.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
