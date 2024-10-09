import react from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";

export default function({ navigation }){
    const data = require("../../data/noticias.json")
    
    return(
        <View style={{backgroundColor:"#D6D6D6"}}>
            <FlatList
            style={{borderWidth:0,}}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>{
                navigation.navigate("New", {item})
            }}>
            <View style={{width:'100%', alignItems:'center', borderWidth:0,}}>
                <View style={{width:430, height:130, backgroundColor:"white", marginTop:20, borderRadius:20, flexDirection:'row'}}>
                    <View style={{width:'33%', justifyContent:'center', alignItems:'center', borderWidth:0}}>
                        <Image source={{uri: item.imagem}} style={{width:110, height:110, borderRadius:10, }}></Image>
                    </View>
                    <View style={{flex:1, borderWidth:0}}>
                        <Text style={{fontWeight:'500', marginTop:10, color:'#7F7F7F'}}>{item.dia} De {item.mes} De {item.ano}</Text>
                        <Text numberOfLines={3} ellipsizeMode='tail' 
                        style={{fontWeight:'700', fontSize:16, marginTop:10, marginRight:10}}>{item.titulo}</Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
            )}/>
        </View>
    )
}