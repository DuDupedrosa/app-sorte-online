import { Link, useRouter } from 'expo-router';
import { Button, Input, View } from 'native-base';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function AppHome() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.content}>
          <Text style={styles.text}>OLA SOU A HOME</Text>
          <Text>APP CRIADO COM SUCESSO! LETS WORK!</Text>
          <Button onPress={() => router.push('/(tabs)')}>
            <Text>GO TO TABS</Text>
          </Button>
          <Input color={'primary.800'} mx="3" placeholder="Input" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  text: {},
});
