import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { NativeBaseProvider } from 'native-base';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
    RobotoBoldItalic: require('../assets/fonts/Roboto-BoldItalic.ttf'),
    RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoMediumItalic: require('../assets/fonts/Roboto-MediumItalic.ttf'),
    RobotoLight: require('../assets/fonts/Roboto-Light.ttf'),
    RobotoLightItalic: require('../assets/fonts/Roboto-LightItalic.ttf'),
    RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    RobotoThin: require('../assets/fonts/Roboto-Thin.ttf'),
    RobotoThinItalic: require('../assets/fonts/Roboto-Italic.ttf'),
    ...FontAwesome.font,
  });
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
