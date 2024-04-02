import { View } from 'native-base';
import { StyleSheet } from 'react-native';

export default function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#9CA3AF',
    marginVertical: 40,
  },
});
