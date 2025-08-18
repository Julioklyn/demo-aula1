import { View, Text, StyleSheet } from "react-native";


function Button() {
  return (
      <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver Mais</Text>
              </TouchableOpacity>
  );    }
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
      backgroundColor: "#3daf",
    },
    content: {
      flex: 7,
      width: "100%",
      backgroundColor: "#3df",
    },
    logo: {
      width: 40,
      height: 40,
      backgroundColor: "#33a",
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
  
  
  export default Button;