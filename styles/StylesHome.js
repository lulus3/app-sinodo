import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    text_content:{
        fontSize: 20,
    },
    short_images: {
        width: 200,
        height: undefined,
        aspectRatio:1,
        borderRadius:20,
    },
    big_image:{
        width: 430,
        height: 190,
        borderRadius:20,
    },
    box_box_images:{
        width:"100%",
        height: 240,
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems:'center',
        //borderWidth:1,
    },
    box_short_image:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        //borderWidth:1,
    },
    box_big_images:{
        width:"100%", height:"100%", justifyContent:"center", alignItems:"center", 
        //borderWidth:1,
    },
    box_title_text_short_image:{
        position:"absolute", width:"80%", height:"8%", backgroundColor:"#C3C3C3", justifyContent:"center", alignItems:"center",
        borderRadius:10,
        bottom:-10,
    },
    box_title_text_big_image:{
        position:"absolute", width:"80%", height:"8%", backgroundColor:"#C3C3C3", justifyContent:"center", alignItems:"center",
        borderRadius:10,
        bottom:15,
    }

})