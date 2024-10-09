import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";

export default function() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://192.168.1.11:8080/api/user/41d15efb-647b-4988-985e-e0245f85712f');
                const json = await response.json();
                setData(json);
                alert(json)
            } catch (err) { 
                setError('Erro ao carregar os dados');
                alert("erro ao carregar")
            } finally {
                setLoading(false);
            }
        };
   
        fetchData();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            {data && (
                <View style={{ marginTop: 20, padding: 10 }}>
                    <Text>Resposta da API:</Text>
                    {/* Exibindo o JSON como string */}
                    <Text>{JSON.stringify(data, null, 2)}</Text>
                </View>
            )}
        </View>
    );
}
