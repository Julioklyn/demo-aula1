import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}></View>
        <Text>Logo</Text>
        <View style={styles.menu}></View>
      </View>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardIcon}></View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Título</Text>
            <Text style={styles.cardSubtitle}>conteudo--------------------------------------------------------------------------------------------------------------------------------</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardIcon}></View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Texto</Text>
            <Text style={styles.cardSubtitle}>Texto2--------------------------------------------------------------------------------------------</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Mais</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Julio</Text>
      </View>
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
  header: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#3daf"
  },
  content: {
    flex: 7,
    width: "100%",
    backgroundColor: "#3df"
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: "#33a"
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#33a",
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  footer: {
    width: "100%",
    padding: 20, 
    backgroundColor: "#333",
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 14,
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