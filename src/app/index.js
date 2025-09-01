import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      
      {}
      <View style={styles.linksContainer}>
        <Link href="contact">
          <Text style={styles.linkText}>Contato</Text>
        </Link>
        <Link href="sobre">
          <Text style={styles.linkText}>Sobre</Text>
        </Link>
      </View>

      <View style={styles.content}>
        <Card 
          titulo="House of Dragons" 
          desc="Guerra de dragão" 
          img="https://wp.ufpel.edu.br/empauta/files/2022/09/Imagem-1-2.jpeg" 
        />
        <Card 
          titulo="Lord of the Rings" 
          desc="Batalha Contra Sauron" 
          img="https://upload.wikimedia.org/wikipedia/pt/3/38/Lord_of_the_Rings_Fellowship_of_the_Ring.jpg" 
        />
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Mais</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3daff1",
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%", // ajuste conforme desejar
    marginVertical: 10,
  },
  linkText: {
    fontSize: 18,
    color: "#fff",
    textDecorationLine: "underline",
  },
  content: {
    flex: 7,
    width: "100%",
    backgroundColor: "#3df",
  },
  button: {
    marginTop: 10,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#33a",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});