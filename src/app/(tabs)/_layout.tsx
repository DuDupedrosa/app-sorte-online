import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';

import Colors from '@/src/constants/Colors';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// podemos usar outros icones além desse tabBarIcon, aqui é uma forma de razer
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#1F2937',
          paddingBottom: 10,
          height: 80,
        },
        headerShown: false,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
      }}
    >
      {/* não temos a home, pois a home, porque a home é na área deslogada */}
      {/* importante lembrar a index é a page principal, então sempre precisamos ter ela!   */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'loterias',
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="clover" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="helper"
        options={{
          title: 'Suporte',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="support-agent" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
