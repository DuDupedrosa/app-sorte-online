import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Button, View, Text, Stack } from 'native-base';
import { useRouter } from 'expo-router';
import CommonHeader from '@/src/components/native/CommonHeader';
import ButtonComponent from '@/src/components/native/ButtonComponent';
import { FontAwesome6 } from '@expo/vector-icons';
import Divider from '@/src/components/native/Divider';
import SectionIntroTitle from '@/src/components/native/SectionIntroTitle';
import { colors } from '@/src/constants/theme/colors';

const lotteryOptions = [
  {
    name: 'Maismilionaria',
    color: '#2563eb',
  },
  {
    name: 'Lotofácil',
    color: '#ea580c',
  },
  {
    name: 'Quina',
    color: '#ca8a04',
  },
  {
    name: 'lotomania',
    color: '#65a30d',
  },
  {
    name: 'Timemania',
    color: '#7c3aed',
  },
  {
    name: 'Dupla-sena',
    color: '#db2777',
  },
  {
    name: 'Federal',
    color: '#9333ea',
  },
  {
    name: 'Dia de sorte',
    color: '#4f46e5',
  },
  {
    name: 'Super sete',
    color: '#dc2626',
  },
];

export default function TabOneScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <CommonHeader showButtonBackHome={true} />

      {/* content */}
      <ScrollView>
        <View style={styles.content}>
          {/* CARDS DOS SOREITOS */}
          {/* title container */}
          <SectionIntroTitle
            title={'Faça uma consulta'}
            subTitle={
              'Escolhe uma loteria e consulte o resultado mais recente!'
            }
          />

          {/* MAIN LOTTERY- Mega sena */}
          <View>
            {/* TAG */}
            <View style={styles.lotteryMainTag}>
              <Text style={styles.lotteryMainTagTitle}>Mais consultado</Text>
            </View>
            {/* CARD */}
            <View
              style={{ ...styles.mainLotteryContainer, borderColor: '#d97706' }}
            >
              {/* name + icon */}
              <View style={styles.cardLotteryFlexTitle}>
                <FontAwesome6 name="clover" size={32} color="#d97706" />
                <Text style={styles.cardLotteryTitle}>mega-sena</Text>
              </View>

              {/* button to consult */}
              <ButtonComponent
                label="Consultar"
                buttonProps={{
                  bg: '#1D4ED8',
                  borderRadius: 8,
                  padding: 1,
                }}
                labelProps={styles.buttonCardLabel}
              />
            </View>
          </View>

          {/* DIVIDER */}
          <Divider />

          {/* LOTERIAS */}
          {/* TITLE */}
          <Text style={styles.moreLotteryOptionsTitle}>Concursos:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              {lotteryOptions.map((lottery, i: number) => {
                return (
                  <View
                    key={i}
                    style={{
                      ...styles.mainLotteryContainer,
                      borderColor: lottery.color,
                    }}
                  >
                    {/* name + icon */}
                    <View style={styles.cardLotteryFlexTitle}>
                      <FontAwesome6
                        name="clover"
                        size={32}
                        color={lottery.color}
                      />
                      <Text style={styles.cardLotteryTitle}>
                        {lottery.name}
                      </Text>
                    </View>

                    {/* button to consult */}
                    <ButtonComponent
                      label="Consultar"
                      buttonProps={{
                        bg: colors.primary.primary_600,
                        borderRadius: 8,
                        padding: 1,
                      }}
                      labelProps={styles.buttonCardLabel}
                    />
                  </View>
                );
              })}
            </View>
            <View></View>
          </ScrollView>
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
    padding: 20,
    marginTop: 20,
    paddingBottom: 60,
  },
  lotteryCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lotteryCardName: {
    color: colors.gray.gray_400,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  lotteryContainer: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  // card da mega-sena
  mainLotteryContainer: {
    backgroundColor: colors.gray.gray_800,
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    width: 260,
    height: 160,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  // estilo do titulo do nome do concurso no card
  cardLotteryTitle: {
    color: colors.light,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  buttonCardLabel: {
    fontSize: 14,
    color: colors.light,
  },
  // mega-sena-principal
  lotteryMainTag: {
    backgroundColor: '#ffd701',
    padding: 2,
    borderRadius: 8,
    width: 140,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  lotteryMainTagTitle: {
    padding: 2,
    borderRadius: 8,
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.gray.gray_900,
    textAlign: 'center',
  },
  // flex title, para o titulo dos cards
  cardLotteryFlexTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    alignItems: 'center',
  },
  moreLotteryOptionsTitle: {
    fontSize: 18,
    color: colors.light,
    fontWeight: 'bold',
    marginBottom: 12,
    textTransform: 'capitalize',
  },
});
