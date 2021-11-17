import React, {useEffect, useState} from 'react';
import {
    StyleSheet, 
    View, 
    TextInput,
    TouchableOpacity,
     
} from 'react-native';
import MapView from 'react-native-maps';
import InputSearchImg from '../../assets/images/input-search.svg';
import Geolocation from '@react-native-community/geolocation';

export default function Maps() {
    const [currentPosition, setCurrentPosition] = useState({
        latitude: -23.5492243,
        longitude: -46.5813785,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });
    
    useEffect(() => {
        function fetchLocation() {
            Geolocation.getCurrentPosition((response) => {
                console.log("fetchLocation->response", response);
                setCurrentPosition({
                    latitude: response.coords.latitude,
                    longitude: response.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                });
            }, 
            (error) => {
                console.log("fetchLocation->error", error);
                if(error.PERMISSION_DENIED)
                    setTimeout(() => fetchLocation(), 10000);
            });
        }

        fetchLocation();
    }, currentPosition);

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
                    initialRegion={{
                        latitude: -23.5492243,
                        longitude: -46.5813785,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                />
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
    } 
});