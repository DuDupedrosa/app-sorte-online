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
import { colors } from '@/src/constants/theme/colors';

type Props = {
  showButtonBackHome?: boolean;
  lastPage?: boolean;
};

export default function CommonHeader({ showButtonBackHome, lastPage }: Props) {
  const router = useRouter();

  function handleGoBack() {
    // passou o last page, ele volta para a última rota visitada.
    if (lastPage) {
      router.back();
      return;
    }

    router.push('/');
  }

  return (
    <SafeAreaView>
      <View style={styles.content}>
        {/* logo container */}
        <View style={styles.logoContainer}>
          {/* BACK TO HOME */}
          {showButtonBackHome && (
            <TouchableOpacity onPress={() => handleGoBack()}>
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
    marginBottom: 32,
    height: 102,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: colors.gray.gray_800,
  },
  logoContainer: {
    marginTop: 8,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
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
