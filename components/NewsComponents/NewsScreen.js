import { ScrollView, Text, View, Image, ActivityIndicator  } from "react-native";
import React, { useEffect, useState } from 'react';

export default function({ route }){

    const { item } = route.params;
    const [fileContent, setFileContent] = useState('');
    const [loading, setLoading] = useState(true);
    const fileUrl = item.conteudo;

    useEffect(() => {
        const fetchFileContent = async () => {
        try {
            const response = await fetch(fileUrl);
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const content = await response.text();
            const final_content = content//.replace(/\n[^\n]\n/g, '\n').replace(/\n\n/g, '\n').replace(/\n/g, '\n\n')
            setFileContent(final_content);
        } catch (error) {
            console.error('Error fetching file:', error);
            setFileContent('Error loading content');
        } finally {
            setLoading(false);
        }
        };

        fetchFileContent();
    }, [fileUrl]);

    if (loading) {
        return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff',}}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
        );
    }

    return(
        <ScrollView>
            <View style={{justifyContent:"center", alignItems:'center', width: "100%", height: 350}}>
                <Image source={{uri: item.imagem}} style={{width: 440, height: 300, borderRadius: 20}}></Image>
            </View>
            <View>
                <Text style={{marginHorizontal:20, marginBottom:25, fontWeight:'500', color:'#383838'}}>{item.dia} De {item.mes} De {item.ano}</Text>
                <Text style={{marginHorizontal:20, marginBottom:25, fontWeight:'700', fontSize:22}}>{item.titulo}</Text>
                <Text style={{marginHorizontal:20, marginBottom:25}}>{fileContent}</Text>
            </View>
            
        </ScrollView>
    )
}