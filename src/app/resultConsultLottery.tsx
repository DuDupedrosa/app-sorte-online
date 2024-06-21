import { View, Text, Skeleton, Spinner, HStack, Heading } from 'native-base';
import { SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { colors } from '../constants/theme/colors';
import CommonHeader from '../components/native/CommonHeader';
import SectionIntroTitle from '../components/native/SectionIntroTitle';
import ButtonComponent from '../components/native/ButtonComponent';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { http } from '../api/https';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { formattedCurrency } from '../helper/methods/currency/currencyHelper';
import NotFoundError from '../components/native/NotFoundError';
import ErrorPage from '../components/native/ErrorPage';

export default function ResultConsultLottery() {
  const router = useRouter();
  const [lotteryData, setLotteryData] = useState<LotteryData | null>(null);
  const params = useLocalSearchParams<{
    lottery: string;
    lotteryNumber: string;
  }>();
  const [searchOneLottery, setSearchOneLottery] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const [showNotFoundLottery, setShowNotFoundLottery] =
    useState<boolean>(false);
  const [errorPage, setErrorPage] = useState<boolean>(false);

  const getLottery = async () => {
    const { data } = await http.get(
      `/${params.lottery}/${
        params.lotteryNumber === '0' ? 'latest' : Number(params.lotteryNumber)
      }`
    );
    return data;
  };

  const useGetLottery = useQuery({
    queryKey: ['getLottery'],
    queryFn: getLottery,
    enabled: false,
    // cashing time
    gcTime: 0,
    retry: 1,
  });

  useEffect(() => {
    if (useGetLottery.isSuccess) {
      setLotteryData(useGetLottery.data);

      if (!useGetLottery.data) {
        setShowNotFoundLottery(true);
      }
    }
  }, [useGetLottery.isSuccess]);

  // get lottery when params is passed
  useEffect(() => {
    if (params.lottery) {
      // não chama no erro
      if (!useGetLottery.isLoading && !useGetLottery.isError) {
        useGetLottery.refetch();
      }
    }

    if (params.lotteryNumber && params.lotteryNumber !== '0') {
      setSearchOneLottery(true);
    }
  }, [params]);

  useEffect(() => {
    if (useGetLottery.isError) {
      setErrorPage(true);
    }
  }, [useGetLottery.isError]);

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

          {/* error page */}
          {!useGetLottery.isLoading && useGetLottery.isError && errorPage && (
            <ErrorPage />
          )}

          {/* not found section  */}
          {/* case de api return 200 with no-content */}
          {!useGetLottery.isLoading &&
            useGetLottery.isSuccess &&
            showNotFoundLottery && <NotFoundError />}

          {/* page loading */}
          {useGetLottery.isLoading && (
            <Spinner accessibilityLabel="Loading posts" size={'lg'} />
          )}

          {/* LINK TOP CARD NEW CONSULT */}
          {!useGetLottery.isLoading && lotteryData && (
            <Link
              href={searchOneLottery ? '/searchOneLottery' : '/(tabs)/'}
              style={styles.linkNewConsult}
            >
              Nova busca
            </Link>
          )}

          {/* card resultado */}
          {!useGetLottery.isLoading && lotteryData && (
            <View style={styles.cardContainer}>
              {/* loteria */}
              <View style={styles.cardLabelAndValueContainer}>
                <Text style={styles.cardLabel}>Loteria:</Text>
                <Text style={styles.cardValue}>{lotteryData.loteria}</Text>
              </View>

              {/* DEZENAS */}
              <View style={styles.cardLabelAndValueContainer}>
                <Text style={styles.cardLabel}>Dezenas:</Text>

                {/* DEZENAS PARA DAR UM LOOP */}
                <View style={styles.cardLotteryNumbersContainer}>
                  {lotteryData.dezenas.map((number, i: number) => {
                    return (
                      <Text style={styles.cardLotteryNumbers} key={i}>
                        {number}
                      </Text>
                    );
                  })}
                </View>
              </View>

              {/* concurso */}
              <View style={styles.cardLabelAndValueContainer}>
                <Text style={styles.cardLabel}>Concurso:</Text>
                <Text style={styles.cardValue}>{lotteryData.concurso}</Text>
              </View>

              {/* data do sorteio */}
              <View style={styles.cardLabelAndValueContainer}>
                <Text style={styles.cardLabel}>Data do sorteio:</Text>
                <Text style={styles.cardValue}>{lotteryData.data}</Text>
              </View>

              {/* acumulou */}
              <View style={styles.cardLabelAndValueContainer}>
                <Text style={styles.cardLabel}>Acumulou:</Text>
                <Text style={styles.cardValue}>
                  {lotteryData.acumulou ? 'SIM' : 'NÃO'}
                </Text>
              </View>

              {/* valor acumulado para o prox concurso */}
              {lotteryData.acumulou && (
                <View style={styles.cardLabelAndValueContainer}>
                  <Text style={styles.cardLabel}>Valor acumulado:</Text>
                  <Text style={styles.cardValue}>
                    {formattedCurrency(
                      lotteryData.valorAcumuladoProximoConcurso
                    )}
                  </Text>
                </View>
              )}

              {/* label + value */}
              {lotteryData.acumulou && lotteryData.dataProximoConcurso && (
                <View style={styles.cardLabelAndValueContainer}>
                  <Text style={styles.cardLabel}>Data próximo concurso:</Text>
                  <Text style={styles.cardValue}>
                    {lotteryData.dataProximoConcurso}
                  </Text>
                </View>
              )}

              {lotteryData.acumulou &&
                lotteryData.valorEstimadoProximoConcurso && (
                  <View style={styles.cardLabelAndValueContainer}>
                    <Text style={styles.cardLabel}>
                      Valor estimado próximo concurso:
                    </Text>
                    <Text style={styles.cardValue}>
                      {formattedCurrency(
                        lotteryData.valorEstimadoProximoConcurso
                      )}
                    </Text>
                  </View>
                )}

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
                onPress={() =>
                  router.push(
                    searchOneLottery ? '/searchOneLottery' : '/(tabs)/'
                  )
                }
              />
            </View>
          )}
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
    flexDirection: 'column',
    gap: 8,
  },
  cardLabel: {
    color: colors.gray.gray_200,
    fontSize: 18,
    fontFamily: 'RobotoRegular',
  },
  cardValue: {
    color: colors.gray.gray_400,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'RobotoBold',
  },
  cardContainer: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: colors.gray.gray_800,
    flexDirection: 'column',
    gap: 30,
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
    fontFamily: 'RobotoBold',
  },
  cardLotteryNumbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingRight: 20,
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
  skeletonContainer: {
    backgroundColor: colors.gray.gray_800,
    borderRadius: 8,
    padding: 20,
    gap: 30,
    position: 'relative',
  },
  buttonContainerSkeleton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  loadingText: {
    color: colors.light,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 1,
    fontFamily: 'RobotoBold',
  },
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
});
