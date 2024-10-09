import react from "react";
import { View, Text, StyleSheet } from "react-native";
import Styles from "../styles/StylesHome";

export default function(){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={Styles.text_content}>Perfil</Text>
        </View>
    )
}