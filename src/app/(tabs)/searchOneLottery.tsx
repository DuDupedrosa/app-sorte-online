import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import CommonHeader from '@/src/components/native/CommonHeader';
import { colors } from '@/src/constants/theme/colors';
import SectionIntroTitle from '@/src/components/native/SectionIntroTitle';
import {
  Input,
  View,
  Text,
  Box,
  FormControl,
  WarningOutlineIcon,
  Select,
  CheckIcon,
} from 'native-base';
import ButtonComponent from '@/src/components/native/ButtonComponent';
import { useEffect, useState } from 'react';

export default function TabHelpScreen() {
  const [required, setRequired] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [service, setService] = useState('');

  function submit() {
    if (!inputValue) {
      setRequired(true);
      return;
    }
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
            <Text style={styles.inputSearchLabel}>Número do concurso:</Text>
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

            <Select
              selectedValue={service}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>

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
  },
  inputSearch: {
    backgroundColor: colors.gray.gray_800,
    color: colors.gray.gray_400,
  },
  inputSearchLabel: {
    color: colors.gray.gray_200,
    fontSize: 16,
    marginBottom: 12,
  },
});
