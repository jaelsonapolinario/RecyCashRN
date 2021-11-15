import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../pages/Home';
import Search from '../pages/Search';
import Maps from '../pages/Maps';
import Profile from '../pages/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const icons = {
    Início: {name: 'home'},
    Pesquisa: {name: 'search'},
    Mapa: {name: 'map'},
    Perfil: {name: 'user-circle'}
};

export default function Tabs() {
    return <>
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    const {name} = icons[route.name];
                    
                    return <Icon name={name} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#40FF40'
            })}>
            <Tab.Screen name="Início" component={Home}/>
            <Tab.Screen name="Pesquisa" component={Search} />
            <Tab.Screen name="Mapa" component={Maps} />
            <Tab.Screen name="Perfil" component={Profile} />
        </Tab.Navigator>
    </>
}