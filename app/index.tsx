import ButtonComponent from '@/components/native/ButtonComponent';
import CommonFooter from '@/components/native/CommonFooter';
import CommonHeader from '@/components/native/CommonHeader';
import { Link, useRouter } from 'expo-router';
import { Button, Input, Stack, View } from 'native-base';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function AppHome() {
  const router = useRouter();

  const [pressed, setPressed] = useState(false);

  const handlePressIn = () => {
    setPressed(true);
  };

  const handlePressOut = () => {
    setPressed(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* header */}
        <CommonHeader />

        {/* intro */}
        <Stack marginTop={'72px'}>
          {/* first-section-call-action */}
          <View style={styles.lotteryContainer}>
            <Text style={styles.lotteryTitle}>Consulte uma loteria</Text>
            <Text style={styles.lotteryText}>
              Com o Sorte Online, consulte facilmente os resultados dos
              concursos de loteria atuais e anteriores. Esteja sempre por dentro
              dos números sorteados e dos prêmios distribuídos em suas loterias
              favoritas. clique no botão abaixo e simplifique sua experiência
              com a loteria!
            </Text>

            <ButtonComponent
              label="Consultar"
              buttonProps={{
                variant: 'solid',
                bgColor: '#1D4ED8',
                marginLEft: 'auto',
                marginRight: 'auto',
                marginTop: '32px',
                height: '53px',
                width: '100%',
              }}
              labelProps={{ style: styles.lotteryButtonText }}
              onPress={() => router.push('/(tabs)')}
            />
          </View>
        </Stack>

        {/* FOOTER */}
        <CommonFooter />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  content: {
    marginTop: 20,
    height: '95%',
  },
  lotteryContainer: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 32,
    marginHorizontal: 20,
  },
  lotteryTitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 32,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  lotteryText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#9CA3AF',
    lineHeight: 20,
    fontWeight: '500',
  },
  lotteryButtonText: {
    color: '#E5E7EB',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
