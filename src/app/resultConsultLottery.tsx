import { View, Text } from 'native-base';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { colors } from '../constants/theme/colors';
import CommonHeader from '../components/native/CommonHeader';
import SectionIntroTitle from '../components/native/SectionIntroTitle';
import ButtonComponent from '../components/native/ButtonComponent';
import { Link, useRouter } from 'expo-router';

export default function ResultConsultLottery() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader showButtonBackHome={true} lastPage={true} />

      {/* CONTENT */}
      <ScrollView>
        {/* title */}
        <View style={styles.content}>
          <SectionIntroTitle
            title="Resultado"
            subTitle="Resultado para a mega-sena"
          />

          {/* LINK TOP CARD NEW CONSULT */}
          <Link href={'/(tabs)/'} style={styles.linkNewConsult}>
            Nova busca
          </Link>
          {/* card resultado */}
          <View style={styles.cardContainer}>
            {/* label + value */}
            <View style={styles.cardLabelAndValueContainer}>
              <Text style={styles.cardLabel}>Loteria:</Text>
              <Text style={styles.cardValue}>mega-sena</Text>
            </View>

            {/* DEZENAS */}
            <View style={styles.cardLabelAndValueContainer}>
              <Text style={styles.cardLabel}>Dezenas:</Text>

              {/* DEZENAS PARA DAR UM LOOP */}
              <View style={styles.cardLotteryNumbersContainer}>
                <Text style={styles.cardLotteryNumbers}>01</Text>
                <Text style={styles.cardLotteryNumbers}>02</Text>
                <Text style={styles.cardLotteryNumbers}>82</Text>
                <Text style={styles.cardLotteryNumbers}>51</Text>
                <Text style={styles.cardLotteryNumbers}>06</Text>
                <Text style={styles.cardLotteryNumbers}>06</Text>
                <Text style={styles.cardLotteryNumbers}>06</Text>
                <Text style={styles.cardLotteryNumbers}>06</Text>
                <Text style={styles.cardLotteryNumbers}>06</Text>
                <Text style={styles.cardLotteryNumbers}>06</Text>
              </View>
            </View>

            {/* label + value */}
            <View style={styles.cardLabelAndValueContainer}>
              <Text style={styles.cardLabel}>Loteria:</Text>
              <Text style={styles.cardValue}>mega-sena</Text>
            </View>
            {/* label + value */}
            <View style={styles.cardLabelAndValueContainer}>
              <Text style={styles.cardLabel}>Loteria:</Text>
              <Text style={styles.cardValue}>mega-sena</Text>
            </View>
            {/* label + value */}
            <View style={styles.cardLabelAndValueContainer}>
              <Text style={styles.cardLabel}>Loteria:</Text>
              <Text style={styles.cardValue}>mega-sena</Text>
            </View>
            {/* label + value */}
            <View style={styles.cardLabelAndValueContainer}>
              <Text style={styles.cardLabel}>Loteria:</Text>
              <Text style={styles.cardValue}>mega-sena</Text>
            </View>
            {/* label + value */}
            <View style={styles.cardLabelAndValueContainer}>
              <Text style={styles.cardLabel}>Loteria:</Text>
              <Text style={styles.cardValue}>mega-sena</Text>
            </View>
            {/* label + value */}
            <View style={styles.cardLabelAndValueContainer}>
              <Text style={styles.cardLabel}>Loteria:</Text>
              <Text style={styles.cardValue}>mega-sena</Text>
            </View>
            {/* label + value */}
            <View style={styles.cardLabelAndValueContainer}>
              <Text style={styles.cardLabel}>Loteria:</Text>
              <Text style={styles.cardValue}>mega-sena</Text>
            </View>
            {/* label + value */}
            <View style={styles.cardLabelAndValueContainer}>
              <Text style={styles.cardLabel}>Loteria:</Text>
              <Text style={styles.cardValue}>mega-sena</Text>
            </View>
            {/* label + value */}
            <View style={styles.cardLabelAndValueContainer}>
              <Text style={styles.cardLabel}>Loteria:</Text>
              <Text style={styles.cardValue}>mega-sena</Text>
            </View>

            {/* BUTTON END CARD PARA NOVA BUSCA */}
            <ButtonComponent
              label="Nova busca"
              buttonProps={{
                bg: colors.primary.primary_600,
                mt: 12,
                marginLeft: 'auto',
              }}
              labelProps={{
                color: colors.light,
                textTransform: 'capitalize',
                fontWeight: 'bold',
              }}
              onPress={() => router.push('/(tabs)/')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray.gray_900,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  cardLabelAndValueContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  cardLabel: {
    color: colors.gray.gray_200,
    fontSize: 18,
  },
  cardValue: {
    color: colors.gray.gray_400,
    fontSize: 16,
    fontWeight: '500',
  },
  cardContainer: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: colors.gray.gray_800,
    flexDirection: 'column',
    gap: 20,
  },
  cardLotteryNumbers: {
    width: 32,
    height: 32,
    borderRadius: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.sky.sky_500,
    backgroundColor: colors.primary.primary_700,
    fontSize: 14,
    color: colors.light,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 3,
  },
  cardLotteryNumbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingRight: 80,
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
