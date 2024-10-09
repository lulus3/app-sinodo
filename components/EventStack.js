import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Image } from "react-native";
import EventListScreen from "./EventComponents/EventListScreen";
import EventScreen from "./EventComponents/EventScreen";

const Stack = createNativeStackNavigator()

export default function(){
    return(
        <Stack.Navigator initialRouteName="EventList" 
        screenOptions={({route})=>({headerStyle:route.name == "EventList"?{backgroundColor:undefined}:{backgroundColor:"green"}})}>
            <Stack.Screen name="EventList" component={EventListScreen} 
            options={{headerBackground: ()=>{
                return(
                    <Image
                    source={require("../assets/imagem_sinodo.png")}
                    style={{width: '100%',
                        height: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                    }}>
                    </Image>
                    )},
                title:"Eventos",
                }}
            />
            <Stack.Screen name="Evento" component={EventScreen} options={{title:""}}/>
        </Stack.Navigator>
    )
}