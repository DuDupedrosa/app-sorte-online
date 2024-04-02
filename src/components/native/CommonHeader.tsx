import { appConfig } from '@/src/constants/config';
import { Link, useRouter } from 'expo-router';
import { Button, Text, View } from 'native-base';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type Props = {
  showButtonBackHome?: boolean;
};

export default function CommonHeader({ showButtonBackHome }: Props) {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={styles.content}>
        {/* logo container */}
        <View style={styles.logoContainer}>
          {/* BACK TO HOME */}
          {showButtonBackHome && (
            <TouchableOpacity onPress={() => router.push('/')}>
              <AntDesign name="arrowleft" size={28} color="white" />
            </TouchableOpacity>
          )}

          {/* LOGO */}
          <View style={styles.logoTouchOpacityContainer}>
            <TouchableOpacity
              style={styles.logoTouchOpacity}
              onPress={() => router.push('/')}
            >
              <Image source={require('@/src/assets/images/logo.png')} />
              <Text style={styles.logoName}>{appConfig.name}</Text>
            </TouchableOpacity>
          </View>
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
    width: '100%',
  },
  logoTouchOpacity: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  logoTouchOpacityContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoName: {
    fontSize: 20,
    color: '#E5E7EB',
    letterSpacing: 0.5,
  },
});
