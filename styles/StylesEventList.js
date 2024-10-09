import { StyleSheet } from "react-native";

export default StyleSheet.create({
    box_content:{
        justifyContent:"center", alignItems:"center", width:"100%", height:250, 
    },
    image:{
        width:430, height:200, borderRadius:20,
    },
    box_text_date:{
        backgroundColor:"yellow", position:"absolute", top:30, left:40, borderRadius:15,
    },
    box_text_title:{
        backgroundColor:"#C3C3C3", position:"absolute", bottom:15, left:40, width: 400, borderRadius:15,
    },
    text_date:{
        margin:3, fontSize: 12, marginHorizontal: 10,
    },
    text_title:{
        margin:3, marginHorizontal: 10, fontWeight:"500"
    },
})