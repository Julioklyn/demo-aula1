import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

function Card({ desc, img, titulo }) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={img} 
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{titulo}</Text>
        <Text>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  cardContent: {
    flex: 1,
    marginLeft: 10, 
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 50, 
    height: 50, 
    borderRadius: 10, 
  },
});

export default Card;
