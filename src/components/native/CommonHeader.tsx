import { appConfig } from '@/src/constants/config';
import { Link, useRouter } from 'expo-router';
import { Button, Text, View } from 'native-base';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function CommonHeader() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={styles.content}>
        {/* logo container */}
        <View style={styles.logoContainer}>
          <TouchableOpacity
            style={styles.logoTouchOpacity}
            onPress={() => router.push('/')}
          >
            <Image source={require('@/src/assets/images/logo.png')} />
            <Text style={styles.logoName}>{appConfig.name}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: 74,
    padding: 16,
    marginTop: 50,
  },
  logoContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  logoTouchOpacity: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  logoName: {
    fontSize: 20,
    color: '#E5E7EB',
    letterSpacing: 0.5,
  },
});
