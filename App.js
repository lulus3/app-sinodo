import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import EventListScreen from './components/EventComponents/EventListScreen';
import NewsStack from './components/NewsStack';
import ProfileScreen from './components/ProfileScreen';
import MoreScreen from './components/MoreScreen';
import HomeStack from './components/HomeStack';
import EventStack from './components/EventStack';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      headerBackground: ()=>{
        return(
        <Image
        source={require("./assets/imagem_sinodo.png")}
        style={{width: '100%',
          height: '100%',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}></Image>
      )},
      headerStyle:{backgroundColor:"green"},
      tabBarActiveTintColor:"green", 
      tabBarIcon: ({ focused, color, size }) => {
        let iconname = ""
        if(route.name == "Home"){
          iconname = "home"
        }
        else if(route.name == "Eventos"){
          iconname = "calendar"
        }
        else if(route.name == "Noticias"){
          iconname = "newspaper"
        }
        else if(route.name == "Perfil"){
          iconname = "person"
        }
        else if(route.name == "Mais"){
          iconname = "ellipsis-horizontal"
        }

        return <Icon name={iconname} size={size} color={color} />;
      },

    })}>
      <Tab.Screen name="Home" component={HomeStack} options={{headerShown:false}} />
      <Tab.Screen name="Eventos" component={EventStack} options={{headerShown:false}}/>
      <Tab.Screen name="Noticias" component={NewsStack} options={{headerShown:false}}/>
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="Mais" component={MoreScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer style={{color:"red"}}>
      <MyTabs />
    </NavigationContainer>
  );
}