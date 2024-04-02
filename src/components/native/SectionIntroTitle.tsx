import { colors } from '@/src/constants/theme/colors';
import { View, Text } from 'native-base';
import { StyleSheet } from 'react-native';

type Props = {
  title: string;
  subTitle: string;
};

export default function SectionIntroTitle({ title, subTitle }: Props) {
  return (
    <View style={styles.titlePageContainer}>
      <Text style={styles.titlePage}>{title}</Text>
      <Text style={styles.subTitlePage}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // title page
  titlePage: {
    color: colors.light,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 18,
    textAlign: 'center',
    paddingTop: 12,
  },
  subTitlePage: {
    textAlign: 'center',
    color: colors.gray.gray_400,
    fontSize: 16,
  },
  titlePageContainer: {
    marginBottom: 60,
  },
});
