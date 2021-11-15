import React from 'react';
import { 
    StyleSheet,
    View, 
    Text, 
} from 'react-native';
import RecyclingImg from '../../assets/images/recycling.svg';
import SuistanableImg from '../../assets/images/suistanable-recycling.svg';
import CustomButton from '../../components/CustomButton';

export default function Home() {
    return <>
        <View style={styles.newCollectContainer}>
            <RecyclingImg style={styles.recyclingImg} />
            <View style={styles.newCollectTextColumn}>
                <Text style={styles.textTitleNewCollectContainer}>Pedido de Coleta</Text>
                <Text style={styles.textNewCollectContainer}>Tem material pronto para descarte?</Text>
                <Text style={styles.textNewCollectContainer}>Faça um agendamento de coleta!</Text>
                <CustomButton style={styles.smallButton} textStyle={styles.smallButtonText}>Nova Coleta</CustomButton>
            </View>
        </View>
        <View style={styles.historyContainer}>
            <SuistanableImg style={styles.suistanableImg}/>
        </View>
    </>
}

const styles = StyleSheet.create({
    newCollectContainer: {
        heigth: 225,
        backgroundColor: '#ADF1C4',
        flexDirection: 'row'
    },
    newCollectTextColumn: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 10
        
    },
    recyclingImg: {
        marginLeft: 20,
        marginTop: 42
    },
    historyContainer: {
        flex: 1,
        backgroundColor: '#FFFBD6'
    },
    suistanableImg: {
        position: 'absolute',
        bottom: 5,
        alignSelf: 'center'
    },
    textTitleNewCollectContainer: {
        fontFamily: 'Mohave-Regular',
        fontSize: 13,
        lineHeight: 18,
        color: '#000000',
        textAlign: 'center'

    },
    textNewCollectContainer: {
        fontFamily: 'Mohave-Regular',
        fontSize: 13,
        lineHeight: 18,
        color: '#000000',
        textAlign: 'center',
        marginTop: 10
    },
    smallButton: {
        width: 96,
        height: 24,
        borderRadius: 5
    },
    smallButtonText: {
        fontSize: 13,
        lineHeight: 18
    }
});