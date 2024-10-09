import { ScrollView, Text, View, Image, ActivityIndicator } from "react-native";
import StylesEventPage from "../../styles/StylesEventPage";
import { useState, useEffect } from "react";

export default function({ route }){

    const { item } = route.params;
    const [fileContent, setFileContent] = useState('');
    const [loading, setLoading] = useState(true);
    const fileUrl = item.texto;

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
        <ScrollView style={{}}>
            <View style={ StylesEventPage.box_text_title }>
                <Text style={StylesEventPage.text_title}> {item.titulo} </Text>
            </View>
            <View style={StylesEventPage.box_text_date}>
                <Text style={StylesEventPage.text_date}>{item.dia} {item.mes} {item.ano}</Text>
            </View>
            <View style={StylesEventPage.box_image}>
                <Image source={{uri: item.imagem}} style={StylesEventPage.image}></Image>
            </View>
            <View>
                <Text style={StylesEventPage.text_description}> {fileContent} </Text>
            </View>
        </ScrollView>
    )
}