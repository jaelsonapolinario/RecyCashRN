import React from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IcWhatsapp from '../../assets/images/ic-whatsapp.svg';
import IcFacebook from '../../assets/images/ic-facebook.svg';
import IcPilha from '../../assets/images/ic-pilhas.svg';
import IcPapel from '../../assets/images/ic-papel.svg';

export default function Profile() {
    return <>
        <View style={styles.container}>
            <View style={styles.people}>
                <View style={styles.peoblePhoto}>
                    <Icon name="user-circle" size={96} color="#D7E8FF" />
                </View>
                <View style={styles.peobleInfo}>
                    <Text style={styles.peobleInfotitle}>André</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.peobleInfoEvaluation}>Avaliações:</Text>
                        <Text style={styles.peobleInfoEvaluation, {fontWeight: '500'}}> 4.9</Text>
                    </View>
                    
                </View>
            </View>
            <View style={styles.separetor} />
            <View style={styles.materials}>
                <Text style={styles.title}>Materiais que eu coleto</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.icons}>
                        <IcPapel />
                        <Text style={styles.iconsText}>Papel</Text>
                    </View>
                    <View style={styles.icons}>
                        <IcPilha />
                        <Text style={styles.iconsText}>Pilhas</Text>
                    </View>
                </View>
            </View>
            <View style={styles.separetor} />
            <View style={styles.contact}>
                <Text style={styles.title}>Contato</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.icons}>
                        <IcWhatsapp />
                        <Text style={styles.iconsText}>WhatsApp</Text>
                    </View>
                    <View style={styles.icons}>
                        <IcFacebook />
                        <Text style={styles.iconsText}>Facebook</Text>
                    </View>
                </View>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFBD6',
        padding: 16
    },
    people: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    peoblePhoto: {
        margin: 16,
    },
    peobleInfotitle: {
        fontFamily: 'Mohave-Regular',
        fontSize: 24,
        lineHeight: 34,
        fontWeight: '400'
    },
    peobleInfoEvaluation: {
        fontFamily: 'Mohave-Regular',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '300'
    },
    title: {
        fontFamily: 'Mohave-Regular',
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '500',
        marginTop: 16
    },
    materials: {
        flex: 1,
        alignItems: 'center',
    },
    contact: {
        flex: 1,
        alignItems: 'center',
    },
    separetor: {
        height: 1,
        backgroundColor: '#7B8794',
    },
    icons: {
        alignItems: 'center',
        marginVertical: 16,
        marginHorizontal: 30
    },
    iconsText: {
        fontFamily: 'Mohave-Regular',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '300'
    },
});