import React, { 
    useState,
    useEffect
} from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
 } from "react-native";
import DashboardItem from "../../components/DashboardItem";
import ApiService from "../../services/ApiService";
import IcPapel from '../../assets/images/ic-papel.svg';
import IcPilha from '../../assets/images/ic-pilhas.svg';
import IcMetal from '../../assets/images/ic-metal.svg';
import IcEletronics from '../../assets/images/ic-eletronics.svg';
import IcGlass from '../../assets/images/ic-glass.svg';
import IcPet from '../../assets/images/ic-pet.svg';
import IcOther from '../../assets/images/ic-other.svg';


export default function AddCollections() {
    const [dataObjects, setDataObjects] = useState({});
    const [dataLoad, setDataLoad] = useState(false);

    const fetchData = () => {
        ApiService().get('Objetos')
        .then((response) => {
            setDataLoad(true);
            setDataObjects(response.data);
        })
        .catch((error) => {
            const dataError = error.toJSON();
            console.log(dataError);
        });
        
    };

    const renderItem = ({item}) => {
        const fetchIcon = (nome) => {
            switch(nome){
                case 'Papel':
                    return <IcPapel />;
                    break;
                case 'Pilhas':
                    return <IcPilha />;
                    break;
                case 'Metal':
                    return <IcMetal />;
                    break;
                case 'Eletrônicos':
                    return <IcEletronics />;
                    break;
                case 'Vidro':
                    return <IcGlass />;
                    break;
                case 'Pet':
                    return <IcPet />;
                    break;
                case 'Outros':
                default:
                    return <IcOther />;
                    break;
            }
        };
        
        return <>
            <TouchableOpacity style={styles.itemList}>
                {fetchIcon(item.nome)}
                <Text style={styles.itemListText}>{item.nome}</Text>
            </TouchableOpacity>
        </>
    };

    useEffect(() => {
        fetchData();
    }, [dataLoad]);

    return <>
        <View style={styles.container}>
            <DashboardItem style={styles} title="Materiais" />
            <View style={styles.separetor} />
            <View style={styles.contentItem}>
                <Text style={styles.textDescription}>Selecione o material que será coletado</Text>
                <FlatList 
                    style={styles.flatList}
                    data={dataObjects}
                    renderItem={renderItem}
                    keyExtractor={item => item.codigo}/>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFBD6',
    },
    contentItem: {
        flex: 1,
        alignItems: 'center'
    },
    separetor: {
        height: 1,
        backgroundColor: '#7B8794',
    },
    dashboardItemTitleText: {
        fontSize: 20,
        lineHeight: 27,
        marginTop: 0,
        marginLeft: 0 
    },
    dashboardItem: {
        paddingHorizontal: 20,
        lineHeight: 27,
        paddingVertical: 0
    },
    dashboardItemTitleContent: {
        flexDirection: 'row',
    },
    flatList: {
        flex: 1,
        width: '100%',
        padding: 10
    },
    itemList: {
        height: 64,
        flexDirection: 'row',
        backgroundColor: '#D7E8FF',
        marginVertical: 6,
        borderRadius: 8,
        alignItems: 'center'
    },
    itemListText: {
        fontFamily: 'Mohave-Regular',
        fontSize: 18,
        fontWeight: '500',
    },
    textDescription: {
        fontFamily: 'Mohave-Regular',
        fontSize: 18,
        fontWeight: '500',
        marginTop: 10
    }
});