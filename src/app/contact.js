import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import CardUser from "../components/CardUser";

export default function Contact() {
    const router = useRouter();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const listUsers = async () => {
            try {
                const response = await fetch("http://localhost:3000/profile")
                if (response.ok) {
                    const data = await response.json()
                    setUsers(data.profiles || [])
                } else {
                    console.log("Erro ao carregar lista")
                }
            } catch (error) {
                console.error("Erro:", error)
            } finally {
                setLoading(false)
            }
        }
        listUsers()
    }, [])

    return (
        <View style={styles.container}>
            <Text>Página de Contato</Text>
            {loading ? (
                <Text>Carregando...</Text>
            ) : (
                users && users.length > 0 ? (
                    users.map((user) => (  
                        <CardUser 
                            key={user.id} 
                            name={user.name} 
                            email={user.email} 
                            avatar={user.avatar}
                        />
                    ))
                ) : (
                    <Text>Nenhum usuário encontrado</Text>
                )
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }  
})