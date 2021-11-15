import React from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    Text,
  } from 'react-native';

export default function CustomButton({styleClean = false, style, onPress, textStyle, children}) {
    return <>
    {!styleClean && 
        <TouchableOpacity
            style={[styles.buttonLogin, style]}
            onPress={onPress}>
            <Text style={[styles.buttonLoginText, textStyle]}>{children}</Text>
        </TouchableOpacity>
    }
    {styleClean && 
        <TouchableOpacity 
            style={style}
            onPress={onPress}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    }
    </>;
}

const styles = StyleSheet.create({
    buttonLogin: {
        marginTop: 18,
        alignItems: 'center',
        backgroundColor: '#093269',
        borderRadius: 8,
        borderColor: '#263238',
        borderWidth: 1,
        height: 40,
        justifyContent: 'center'
      },
      buttonLoginText: {
        fontFamily: 'Mohave-Regular',
        fontSize: 18,
        lineHeight: 24,
        color: '#fff'
      },
  });