import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <view style={styles.box1}></view>
      <Text style={styles.titulo}>Titulo Principal</Text>
      <Text style={styles.Subtitulo}>Subtitulo!</Text>
      <Text style={styles.paragrafo}>Este é um paragrafo</Text>
      <Text style={styles.link}>Saiba mais</Text>
      <view style={styles.box2}></view>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  Subtitulo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 20,
  },
  paragrafo: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#1E90FF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  box1: {
    display: 'fleX',
    width: "1000%" ,
    height: 80,
    backgroundColor: '#f00',
    justifyContent: 'space-between',
  },
  box2: {
    width: "1000%" ,
    height: 80,
    backgroundColor: '#f00',
  },
  box2: {
    width: "1000%" ,
    height: 80,
    backgroundColor: '#f00',
  },
});
