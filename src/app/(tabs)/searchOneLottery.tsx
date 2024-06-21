import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import CommonHeader from '@/src/components/native/CommonHeader';
import { colors } from '@/src/constants/theme/colors';
import SectionIntroTitle from '@/src/components/native/SectionIntroTitle';
import {
  Input,
  View,
  Text,
  FormControl,
  WarningOutlineIcon,
  Select,
  CheckIcon,
} from 'native-base';
import ButtonComponent from '@/src/components/native/ButtonComponent';
import { useEffect, useState } from 'react';
import { fullLotteryOptions } from '@/src/helper/lottery/lotteryOptions';
import { useRouter } from 'expo-router';

function LabelComponent({ text }: { text: string }) {
  return <Text style={styles.inputSearchLabel}>{text}</Text>;
}

export default function TabHelpScreen() {
  const [required, setRequired] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [lottery, setLottery] = useState('megasena');
  const router = useRouter();

  function submit() {
    if (!inputValue) {
      setRequired(true);
      return;
    }

    router.push({
      pathname: '/resultConsultLottery',
      params: { lottery, lotteryNumber: inputValue },
    });
  }

  useEffect(() => {
    if (required) {
      if (inputValue && inputValue.length > 0) {
        setRequired(false);
      }
    }
  }, [inputValue]);

  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader showButtonBackHome={true} />

      <ScrollView>
        <View style={styles.content}>
          <SectionIntroTitle
            title="Pesquisar concurso"
            subTitle="Busque por um concurso específico"
          />

          <View>
            <LabelComponent text="Número do concurso" />
            <FormControl isInvalid={required}>
              <Input
                onChangeText={(e) => setInputValue(e)}
                keyboardType="numeric"
                w={'full'}
                size={'md'}
                style={styles.inputSearch}
                borderColor={colors.gray.gray_400}
                _focus={{ borderColor: colors.gray.gray_200 }}
                cursorColor={colors.gray.gray_200}
                placeholder="xxxx"
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Esse campo é obrigatório
              </FormControl.ErrorMessage>
            </FormControl>

            <View mt={'20px'}>
              <LabelComponent text="Loteria" />
              <Select
                selectedValue={lottery}
                minWidth="200"
                accessibilityLabel="Choose lottery"
                placeholder="Choose lottery"
                marginTop={0}
                bgColor={colors.gray.gray_800}
                color={colors.gray.gray_400}
                _selectedItem={{
                  bg: colors.primary.primary_600,
                  endIcon: <CheckIcon size="5" color={colors.light} />,
                }}
                mt={1}
                onValueChange={(itemValue) => setLottery(itemValue)}
              >
                {fullLotteryOptions.map((lottery, i) => {
                  return (
                    <Select.Item
                      key={i}
                      label={lottery.label}
                      value={lottery.name}
                    />
                  );
                })}
              </Select>
            </View>

            <ButtonComponent
              label="Consultar"
              buttonProps={{
                bg: colors.primary.primary_600,
                mt: 8,
                maxWidth: '50%',
              }}
              labelProps={{
                color: colors.light,
                textTransform: 'capitalize',
                fontWeight: 'bold',
              }}
              onPress={() => submit()}
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
  inputSearch: {
    backgroundColor: colors.gray.gray_800,
    color: colors.gray.gray_400,
  },
  inputSearchLabel: {
    color: colors.gray.gray_200,
    fontSize: 16,
    marginBottom: 8,
    fontFamily: 'RobotoRegular',
  },
});
