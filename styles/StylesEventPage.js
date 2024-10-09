import { StyleSheet } from "react-native";

export default StyleSheet.create({
    box_text_title:{
        width:'100%', justifyContent:'center', borderWidth:0, 
    },
    box_text_date:{
        backgroundColor:"orange", width:170, borderRadius:30,  alignItems:"center", left: 25, borderWidth:0
    },
    box_image:{
        justifyContent: "center", alignItems: 'center', height: 300, borderWidth:0
    },
    text_title:{
        fontSize:25, fontWeight:'600',  marginHorizontal: 20, marginTop: 30, marginBottom: 30
    },
    text_date:{
        marginVertical:8, fontSize: 14, marginHorizontal: 8,
    },
    image:{
        width: 440, height: 250, borderRadius:20
    },
    text_description:{
        marginHorizontal:20, lineHeight:18, fontSize:14
    },
})