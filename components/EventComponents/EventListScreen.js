import react from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";
import StylesEventList from "../../styles/StylesEventList";

export default function({ navigation }){
    const data = require("../../data/eventos.json")
    
    return(
        <View>
            <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Evento", { item })
            }}>
                <View style={StylesEventList.box_content}>
                    <Image
                    source={{uri: item.imagem}} style={StylesEventList.image}></Image>
                    <View style={StylesEventList.box_text_date}>
                        <Text style={StylesEventList.text_date}>{item.dia} {item.mes} {item.ano}</Text>
                    </View>
                    <View style={StylesEventList.box_text_title}>
                        <Text style={StylesEventList.text_title} numberOfLines={1} ellipsizeMode="tail">{item.titulo}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            )}/>
        </View>
    )
}