import React from "react";
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import HashtagImg from '../assets/images/hashtag.svg';

export default function DashboardItem({title, children, style}) {
    return <>
        <View style={[styles.dashboardItem, style?.dashboardItem]}>
            <View style={[styles.dashboardItemTitleContent, style?.dashboardItemTitleContent]}>
                <HashtagImg />
                <Text style={[styles.dashboardItemTitleText, style?.dashboardItemTitleText]}>{title}</Text>
            </View>
            <Text style={[styles.dashboardItemContent, style?.dashboardItemContent]}>{children}</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    dashboardItem: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    dashboardItemTitleContent: {
        flexDirection: 'row',
    },
    dashboardItemTitleText: {
        fontFamily: 'Mohave-Regular',
        fontStyle: 'italic',
        fontSize: 16,
        lineHeight: 20,
        color: '#000',
        marginTop: 4,
        marginLeft: 5 
    },
    dashboardItemContent: {
        fontFamily: 'Mohave-Regular',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 17,
        marginTop: 12
    }
});