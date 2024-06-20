import { colors } from '@/src/constants/theme/colors';
import { Link } from 'expo-router';
import { View, Text } from 'native-base';
import react from 'react';
import { Image, StyleSheet } from 'react-native';

function ErrorPage() {
  return (
    <View>
      {/* image not found */}
      <Image
        style={styles.errorImage}
        source={require('@/src/assets/images/repair-equipment.png')}
        // defines whats'll with image em resize
        resizeMode="cover"
      />

      {/* content */}
      <View>
        {/* <Text style={styles.notFoundLotteryTitle}>Ops!</Text> */}
        <Text style={styles.notFoundContentText}>
          Ops, parece que houve um erro durante a sua requisição. Não se
          preocupe, nossa equipe já está trabalhando para resolver o problema.
          Por favor, volte para a tela de concursos e tente novamente em alguns
          minutos.
        </Text>

        <Link
          href={'/(tabs)/'}
          style={{
            ...styles.linkNewConsult,
            textAlign: 'center',
            marginTop: 24,
          }}
        >
          voltar para concursos
        </Link>
      </View>
    </View>
  );
}

export default ErrorPage;

const styles = StyleSheet.create({
  errorImage: {
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
  },
  notFoundContentText: {
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    color: colors.gray.gray_400,
    marginTop: 12,
  },
  linkNewConsult: {
    color: colors.primary.primary_600,
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 12,
    padding: 2,
  },
});
