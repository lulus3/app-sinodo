import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import SinodosMean from "./HomeComponents/SinodosMean";
import { Image } from "react-native";
import SinodoScreen1 from "./HomeComponents/SinodoScreen1";
import SinodoScreen2 from "./HomeComponents/SinodoScreen2";
import SinodoScreen3 from "./HomeComponents/SinodoScreen3";
import SinodoScreen4 from "./HomeComponents/SinodoScreen4";
import SinodoScreen5 from "./HomeComponents/SinodoScreen5";

const Stack = createNativeStackNavigator()

export default function(){
    return(
        <Stack.Navigator initialRouteName="Principal"
        screenOptions={({route})=>({headerStyle:route.name == "Principal"?{backgroundColor:undefined}:{backgroundColor:"green"}})}>
            <Stack.Screen name="Principal" component={HomeScreen} 
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
                title:"Home",
                }}
            />
            <Stack.Screen name="Sinodo" component={SinodosMean}/>
            <Stack.Screen name="Sinodo 1" component={SinodoScreen1}/>
            <Stack.Screen name="Sinodo 2" component={SinodoScreen2}/>
            <Stack.Screen name="Sinodo 3" component={SinodoScreen3}/>
            <Stack.Screen name="Sinodo 4" component={SinodoScreen4}/>
            <Stack.Screen name="Sinodo 5" component={SinodoScreen5}/>
        </Stack.Navigator>
    )
}