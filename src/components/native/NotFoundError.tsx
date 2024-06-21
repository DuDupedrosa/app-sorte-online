import { colors } from '@/src/constants/theme/colors';
import { Link } from 'expo-router';
import { View, Text } from 'native-base';
import react from 'react';
import { Image, StyleSheet } from 'react-native';

function NotFoundError() {
  return (
    <View>
      {/* image not found */}
      <Image
        style={styles.notFoundLotteryImage}
        source={require('@/src/assets/images/not-found.png')}
        // defines whats'll with image em resize
        resizeMode="cover"
      />

      {/* content */}
      <View>
        {/* <Text style={styles.notFoundLotteryTitle}>Ops!</Text> */}
        <Text style={styles.notFoundLotteryText}>
          Parece que não encontramos um resultado correspondente à sua busca.
          Por favor, clique em realizar nova busca e tente novamente.
        </Text>

        <Link
          href={'/(tabs)/'}
          style={{
            ...styles.linkNewConsult,
            textAlign: 'center',
            marginTop: 24,
          }}
        >
          Realizar nova busca
        </Link>
      </View>
    </View>
  );
}

export default NotFoundError;

const styles = StyleSheet.create({
  notFoundLotteryImage: {
    width: 242,
    height: 242,
    // align center
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  notFoundLotteryTitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.gray.gray_200,
    marginBottom: 8,
    fontFamily: 'RobotoMedium',
  },
  notFoundLotteryText: {
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    color: colors.gray.gray_400,
    fontFamily: 'RobotoRegular',
  },
  linkNewConsult: {
    color: colors.primary.primary_600,
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 12,
    padding: 2,
    fontFamily: 'RobotoBold',
  },
});
