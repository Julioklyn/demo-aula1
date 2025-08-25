import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image"; 
import { Entypo } from "@expo/vector-icons";

function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require("../../assets/img/logo.svg")} 
      />
      <Text style={styles.logoText}>MovieKlyn</Text>
      
      <Entypo name="menu" size={32} color="#000" style={{ marginLeft: 10 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 5, 
  },
  logoText: {
    flex: 1,
    textAlign: "left",
    marginLeft: 10,
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: "#33a",
  },
});

export default Header;
