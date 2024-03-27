import { StyleSheet } from 'react-native';

import { Button, View, Text } from 'native-base';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Button onPress={() => router.push('/')}>VOLTAR PARA HOME</Button>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
