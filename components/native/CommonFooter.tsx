import { Text, View } from 'native-base';
import { StyleSheet } from 'react-native';

export default function CommonFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        © 2024 SorteOnline. Todos direitos reservados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerText: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
