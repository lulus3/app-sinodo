import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Image } from "react-native";
import NewsListScreen from "./NewsComponents/NewsListScreen";
import NewsScreen from "./NewsComponents/NewsScreen";

const Stack = createNativeStackNavigator()

export default function(){
    return(
        <Stack.Navigator initialRouteName="NewsList" 
        screenOptions={({route})=>({headerStyle:route.name == "NewsList"?{backgroundColor:undefined}:{backgroundColor:"green"}})}>
            <Stack.Screen name="NewsList" component={NewsListScreen} 
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
                title:"Noticias",
                }}
            />
            <Stack.Screen name="New" component={NewsScreen} options={{title:""}}/>
        </Stack.Navigator>
    )
}