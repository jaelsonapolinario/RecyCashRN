import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableOpacity, 
} from 'react-native';
import InputSearchImg from '../../assets/images/input-search.svg';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
    {
        codigo: '1',
        nome: 'André',
        foto: '',
        avaliacoes: '4.9',
        distancia: '3.4 Km'
    },
    {
        codigo: '2',
        nome: 'ReCiclando',
        foto: '',
        avaliacoes: '4.5',
        distancia: '5 Km'
    },
    {
        codigo: '3',
        nome: 'Cindy',
        foto: '',
        avaliacoes: '4.7',
        distancia: '11 Km'
    },
];

const Header = () => (    
    <View style={styles.header}>
        <TextInput
            placeholder="Buscar"
            placeholderTextColor="#545454"
            style={styles.inputSearch}
         />
         <TouchableOpacity style={styles.inputSearchImg}>
            <InputSearchImg height="55" width="55"  />
         </TouchableOpacity>
    </View>
);
const Item = ({ data }) => (
    <View style={styles.item}>
        <View style={styles.itemPhoto}>
            <Icon name="user-circle" size={48} color="#D7E8FF" />
        </View>
        <View style={styles.itemInfo}>
            <Text style={styles.title}>{data.nome}</Text>
            <Text style={styles.info}>Avaliações: {data.avaliacoes}</Text>
            <Text style={styles.info}>Distância: {data.distancia}</Text>
        </View>
        <View style={styles.itemAction}>
            <CustomButton style={styles.smallButton} textStyle={styles.smallButtonText}>Ver Perfil</CustomButton>
        </View>
    </View>
);

export default function Search() {
    const renderItem = ({ item }) => (
        <Item data={item} />
      );

    return <>
        <FlatList style={styles.flatList}
         ListHeaderComponent={Header}
         data={DATA}
         renderItem={renderItem}
         keyExtractor={item => item.codigo} />
    </>
}

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: '#FFFBD6'
    },
    header: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#DBDBDB',
        justifyContent: 'center',
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    item: {
        height: 120,
        backgroundColor: '#006616',
        borderRadius: 10,
        marginHorizontal: 15,
        marginVertical: 8,
        padding: 16,
        flexDirection: 'row',
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
    itemPhoto: {
        width: 88,
    },
    itemInfo: {
        flex: 1,
    },
    itemAction: {
        width: 120,
        alignItems: 'flex-end'
    },
    smallButton: {
        width: 96,
        height: 24,
        borderRadius: 5,
        position: 'absolute',
        bottom: 0,
        right: 0
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