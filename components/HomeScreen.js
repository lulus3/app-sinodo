import React from "react";
import { View, Text, Image, ScrollView, TouchableHighlight, TouchableOpacity} from "react-native";
import Styles from "../styles/StylesHome";
import { createNativeStackNavigator } from "@react-navigation/native-stack"


const Stack = createNativeStackNavigator()

export default function({navigation}){
    return(
        <ScrollView >
            <View style={Styles.box_box_images}>
                <View style={Styles.box_short_image}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("Sinodo 1")
                    }}>
                        <Image style={Styles.short_images}
                        resizeMode="contain"
                        source={require("../assets/sinodo_para_a_amazonia.jpeg")}>
                        </Image>
                    </TouchableOpacity>
                    <View 
                    style={Styles.box_title_text_short_image}>
                        <Text style={{fontSize:10,}}>sinodo para a amazonia</Text>
                    </View>
                </View>
                <View style={Styles.box_short_image}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Sinodo')
                    }}>
                        <Image style={Styles.short_images}
                        resizeMode="contain"
                        source={require("../assets/sinodo.jpg")}>
                        </Image>
                    </TouchableOpacity>
                    <View 
                    style={Styles.box_title_text_short_image}>
                        <Text style={{fontSize:10,}}>o que é o sinodo?</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.box_box_images}>
                <View style={Styles.box_big_images}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("Sinodo 2")
                    }}>
                        <Image
                        style={Styles.big_image}
                        resizeMode="contain"
                        source={require("../assets/sinodo_norte_catarinense.png")}>
                        </Image> 
                    </TouchableOpacity>
                    <View 
                    style={Styles.box_title_text_big_image}>
                        <Text style={{fontSize:10,}}>sinodo do RGN</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.box_box_images}>
                <View style={Styles.box_short_image}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("Sinodo 3")
                    }}>
                        <Image style={Styles.short_images}
                        resizeMode="contain"
                        source={require("../assets/sinodo_rio_parana.jpg")}>
                        </Image>
                    </TouchableOpacity>
                    <View 
                    style={Styles.box_title_text_short_image}>
                        <Text style={{fontSize:10,}}>Sinodo do rio parana</Text>
                    </View>
                </View>
                <View style={Styles.box_short_image}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("Sinodo 4")
                    }}>
                        <Image style={Styles.short_images}
                        resizeMode="contain"
                        source={require("../assets/sinodo_sao_paulo.jpg")}>
                        </Image>
                    </TouchableOpacity>
                    <View 
                    style={Styles.box_title_text_short_image}>
                        <Text style={{fontSize:10,}}>sinodo de sao paulo</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.box_box_images}>
                <View style={Styles.box_big_images}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("Sinodo 5")
                    }}>
                        <Image
                        style={Styles.big_image}
                        resizeMode="contain"
                        source={require("../assets/relatorios_sinodo.png")}>
                        </Image>
                    </TouchableOpacity>
                    <View 
                    style={Styles.box_title_text_big_image}>
                        <Text style={{fontSize:10,}}>relatorios do sinodo</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        
    )
}