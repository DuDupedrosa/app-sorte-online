import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Button, View, Text, Stack, Badge } from 'native-base';
import { useRouter } from 'expo-router';
import CommonHeader from '@/src/components/native/CommonHeader';
import ButtonComponent from '@/src/components/native/ButtonComponent';
import { FontAwesome6 } from '@expo/vector-icons';
import Divider from '@/src/components/native/Divider';
import SectionIntroTitle from '@/src/components/native/SectionIntroTitle';
import { colors } from '@/src/constants/theme/colors';
import { lotteryOptions } from '@/src/helper/lottery/lotteryOptions';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';

export default function TabOneScreen() {
  const router = useRouter();
  const [cardInRow, setCardInRow] = useState<boolean>(false);
  function handleConsultLottery(lottery: string) {
    router.push({
      pathname: '/resultConsultLottery',
      params: { lottery: lottery, lotteryNumber: '0' },
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <CommonHeader showButtonBackHome={true} />

      {/* content */}
      <ScrollView showsVerticalScrollIndicator={false}>
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
                onPress={() => handleConsultLottery('megasena')}
              />
            </View>
          </View>

          {/* DIVIDER */}
          <Divider />

          {/* LOTERIAS */}
          {/* TITLE */}
          <View
            flexDirection={'row'}
            mb={'16px'}
            justifyContent={'space-between'}
            alignItems={'flex-end'}
          >
            {/* total de loterias */}
            <View flexDirection={'row'}>
              <Text style={styles.moreLotteryOptionsTitle}>Loterias:</Text>
              <Text style={styles.totalLotteryNumber} ml={2}>
                {lotteryOptions.length}
              </Text>
            </View>

            {/* botões para mudar a pisção dos cards */}
            <View style={styles.cardsDirectionsContainer}>
              <Button
                onPress={() => setCardInRow(false)}
                bg={cardInRow ? 'transparent' : colors.primary.primary_700}
                borderColor={cardInRow ? colors.gray.gray_400 : 'transparent'}
                borderWidth={cardInRow ? 1 : 0}
              >
                <Entypo
                  name="grid"
                  size={24}
                  color={cardInRow ? colors.gray.gray_400 : 'white'}
                />
              </Button>
              <Button
                onPress={() => setCardInRow(true)}
                bg={cardInRow ? colors.primary.primary_700 : 'transparent'}
                borderColor={cardInRow ? 'transparent' : colors.gray.gray_400}
                borderWidth={cardInRow ? 0 : 1}
              >
                <Entypo
                  name="menu"
                  size={24}
                  color={cardInRow ? 'white' : colors.gray.gray_400}
                />
              </Button>
            </View>
          </View>

          <ScrollView
            horizontal={cardInRow}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{ flexDirection: cardInRow ? 'row' : 'column', gap: 20 }}
            >
              {lotteryOptions.map((lottery, i: number) => {
                return (
                  <View
                    key={i}
                    style={{
                      ...styles.lotteryCardContainer,
                      borderColor: lottery.color,
                      width: cardInRow ? 260 : '100%',
                      height: cardInRow ? 160 : 'auto',
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
                        {lottery.label}
                      </Text>
                    </View>

                    {/* button to consult */}
                    <View
                      mt={cardInRow ? '0px' : '20px'}
                      ml={cardInRow ? '0' : 'auto'}
                      mr={cardInRow ? '0' : 'auto'}
                    >
                      <ButtonComponent
                        label="Consultar"
                        buttonProps={{
                          bg: colors.primary.primary_600,
                          borderRadius: 8,
                          padding: 1,
                          width: cardInRow ? '100%' : 120,
                        }}
                        labelProps={styles.buttonCardLabel}
                        onPress={() => handleConsultLottery(lottery.name)}
                      />
                    </View>
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
    paddingBottom: 60,
    paddingHorizontal: 20,
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
    fontFamily: 'RobotoMedium',
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
  lotteryCardContainer: {
    backgroundColor: colors.gray.gray_800,
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
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
    textTransform: 'uppercase',
    fontFamily: 'RobotoBold',
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
    fontFamily: 'RobotoBold',
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
    flexDirection: 'row',
    gap: 2,
    fontFamily: 'RobotoBold',
  },
  totalLotteryNumber: {
    fontSize: 18,
    color: colors.light,
    fontWeight: 'bold',
    borderRadius: 8,
    backgroundColor: colors.primary.primary_600,
    width: 26,
    height: 26,
    textAlign: 'center',
    paddingTop: 1,
    fontFamily: 'RobotoBold',
  },
  cardsDirectionsContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
});
