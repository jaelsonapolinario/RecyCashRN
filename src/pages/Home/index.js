import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { 
    StyleSheet,
    View, 
    Text,
    ScrollView, 
} from 'react-native';
import RecyclingImg from '../../assets/images/recycling.svg';
import SuistanableImg from '../../assets/images/suistanable-recycling.svg';
import CustomButton from '../../components/CustomButton';

import DashboardItem from '../../components/DashboardItem';

export default function Home() {
    const navigation = useNavigation();

    return <>
    <ScrollView style={styles.container}>
        <View style={styles.newCollectContainer}>
            <RecyclingImg style={styles.recyclingImg} />
            <View style={styles.newCollectTextColumn}>
                <Text style={styles.textTitleNewCollectContainer}>Pedido de Coleta</Text>
                <Text style={styles.textNewCollectContainer}>Tem material pronto para descarte?</Text>
                <Text style={styles.textNewCollectContainer}>Faça um agendamento de coleta!</Text>
                <CustomButton 
                    style={styles.smallButton} 
                    textStyle={styles.smallButtonText}
                    onPress={() => navigation.navigate('AddCollections')}>Nova Coleta</CustomButton>
            </View>
        </View>
        <View style={styles.historyContainer}>
            <DashboardItem title="Coletas Solicitadas">Você não possui nenhum pedido pendente de coleta =(</DashboardItem>
            <DashboardItem title="Coletas Agendadas">Não há coletas agendadas até o momento =(</DashboardItem>
            <View style={styles.historyDashboardItem}>
                <DashboardItem title="Historico de Coletas">Veja seu histórico de coletas</DashboardItem>
                <CustomButton 
                    style={[styles.smallButtonHistory, styles.smallButton]} 
                    textStyle={styles.smallButtonText}>Ver Histórico</CustomButton>
            </View>
            
            
            <SuistanableImg style={styles.suistanableImg}/>
            
        </View>
    </ScrollView>
        
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    newCollectContainer: {
        heigth: 225,
        backgroundColor: '#ADF1C4',
        flexDirection: 'row'
    },
    newCollectTextColumn: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    recyclingImg: {
        marginLeft: 20,
        marginTop: 42
    },
    historyContainer: {
        minHeight: 468,
        backgroundColor: '#FFFBD6'
    },
    suistanableImg: {
        marginTop: -10,
        alignSelf: 'center'
    },
    textTitleNewCollectContainer: {
        fontFamily: 'Mohave-Regular',
        fontStyle: 'italic',
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
    },
    historyDashboardItem: {
        flexDirection: 'row'
    },
    smallButtonHistory: {
        position: 'absolute',
        right: 15,
        top: 22
    }
});