
import { View, Text, StyleSheet } from "react-native";

function Card() {
  return (
    <View>
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
    </View>

  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 10,
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
});

export default Card;
