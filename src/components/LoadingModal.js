import React from "react";
import {
    Modal,
    View,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

export default function LoadingModal({isVisible}) {
    console.log("modalVisibility", isVisible);
    return <>
        <Modal transparent={true} visible={isVisible}>
            <View style={styles.viewBackground} />
            <Modal transparent={true}>
                <View style={styles.viewModal}>
                    <ActivityIndicator size="large" color="#00ff00"/>
                </View>
            </Modal>
        </Modal>
    </>   
}

const styles = StyleSheet.create({
    viewBackground: {
        flex: 1,
        backgroundColor: 'black', 
        alignItems: 'center', 
        justifyContent: 'center', 
        opacity: 0.5,
    },
    viewModal: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
    }
});