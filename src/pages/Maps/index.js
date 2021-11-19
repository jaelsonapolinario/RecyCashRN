import React, {useEffect, useState} from 'react';
import {
    StyleSheet, 
    View, 
    TextInput,
    TouchableOpacity,
    Text,
     
} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import InputSearchImg from '../../assets/images/input-search.svg';
import Geolocation from '@react-native-community/geolocation';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Maps() {
    const [currentPosition, setCurrentPosition] = useState({
        latitude: -23.5492243,
        longitude: -46.5813785,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        loaded: false
    });

    const [markers, setMarkers] = useState([
        {key: 0, image: require('../../assets/images/marker.png'), coords:{latitude:-23.5592243, longitude:-46.5913785}, data:{
            codigo: '1',
            nome: 'André',
            foto: '',
            avaliacoes: '4.9',
            distancia: '3.4 Km'
        }},
        {key: 1, image: require('../../assets/images/marker.png'), coords:{latitude:-23.5692243, longitude:-46.6013785}, data:{
            codigo: '2',
            nome: 'João',
            foto: '',
            avaliacoes: '4.9',
            distancia: '3.4 Km'
        }},
        {key: 2, image: require('../../assets/images/marker.png'), coords:{latitude:-23.6092243, longitude:-46.6114785}, data:{
            codigo: '3',
            nome: 'Maria',
            foto: '',
            avaliacoes: '4.9',
            distancia: '3.4 Km'
        }},
        {key: 3, image: require('../../assets/images/marker.png'), coords:{latitude:-23.6292243, longitude:-46.6217785}, data:{
            codigo: '4',
            nome: 'Lucia',
            foto: '',
            avaliacoes: '4.9',
            distancia: '3.4 Km'
        }},
        {key: 4, image: require('../../assets/images/marker.png'), coords:{latitude:-23.5492243, longitude:-46.5821785}, data:{
            codigo: '5',
            nome: 'Tobias',
            foto: '',
            avaliacoes: '4.9',
            distancia: '3.4 Km'
        }},
    ]);

    const fetchLocation = () => {
        Geolocation.getCurrentPosition((response) => {
            console.log("fetchLocation->response", response);
            setCurrentPosition({
                latitude: response.coords.latitude,
                longitude: response.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                loaded: true
            });
        }, 
        (error) => {
            console.log("fetchLocation->error", error);
            if(error.PERMISSION_DENIED)
                setTimeout(() => fetchLocation(), 10000);
        });
    };

    useEffect(() => {
        fetchLocation();
    }, [currentPosition.loaded]);
    

    return <>
        <View>
            <View style={styles.header}>
                <TextInput
                    placeholder="Encontrar no mapa"
                    placeholderTextColor="#545454"
                    style={styles.inputSearch}
                />
                <TouchableOpacity style={styles.inputSearchImg}>
                    <InputSearchImg height="55" width="55"  />
                </TouchableOpacity>
            </View>
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.mapView}
                    region={currentPosition}
                    showsUserLocation={true}
                    loadingEnabled={true}>
                        {
                            markers.map((marker) => {
                                return (
                                    <Marker image={marker.image} key={marker.key} coordinate={marker.coords}>
                                        <Callout tooltip={true}>
                                            <View style={styles.item}>
                                                <View style={styles.itemPhoto}>
                                                    <Icon name="user-circle" size={48} color="#D7E8FF" />
                                                </View>
                                                <View style={styles.itemInfo}>
                                                    <Text style={styles.title}>{marker.data.nome}</Text>
                                                    <Text style={styles.info}>Avaliações: {marker.data.avaliacoes}</Text>
                                                    <Text style={styles.info}>Distância: {marker.data.distancia}</Text>
                                                </View>
                                                <View style={styles.itemAction}>
                                                    <CustomButton style={styles.smallButton} textStyle={styles.smallButtonText}>Ver Perfil</CustomButton>
                                                </View>
                                            </View>
                                        </Callout>
                                    </Marker>
                                );
                            })
                        }
                </MapView>
            </View>
            
        </View>
    </>
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#9CFFB2',
        justifyContent: 'center',
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    inputSearch: {
        height: 40,
        backgroundColor: '#fff',
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        width: '90%',
        paddingLeft: 16,
    },
    inputSearchImg: {
        marginTop: 13,
        marginLeft: -6
    },
    mapContainer: {
        width: '100%',
        height: '100%',
    },
    mapView: {
        width: '100%',
        height: '100%'
    },
    item: {
        height: 110,
        width: 240,
        backgroundColor: '#006616',
        borderRadius: 10,
        padding: 8,
        flexDirection: 'row',
    },
    itemPhoto: {
        width: 56,
    },
    itemInfo: {
        flex: 1,
    },
    itemAction: {
        width: 70,
        alignItems: 'flex-end'
    },
    smallButton: {
        width: 70,
        height: 24,
        borderRadius: 5,
        position: 'absolute',
        bottom: 5,
        right: -2
    },
    smallButtonText: {
        fontSize: 13,
        lineHeight: 18
    },
    title: {
        fontFamily: 'Mohave-Regular',
        fontSize: 18,
        lineHeight: 25,
        color: '#fff'
    },
    info: {
        fontFamily: 'Mohave-Regular',
        fontSize: 14,
        lineHeight: 20,
        color: '#fff',
        marginTop: 8
    }
});