import { View, Text, StyleSheet } from "react-native";

function Footer() {
  return (
    <View style={styles.footer}>
            <Text style={styles.footerText}>Julio</Text>
          </View>
  );
}

const styles = StyleSheet.create({
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
});

export default Footer;