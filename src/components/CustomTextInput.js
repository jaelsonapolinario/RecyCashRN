import React from 'react';

import {
    StyleSheet,
    TextInput,
  } from 'react-native';

export default function CustomTextInput({style, placeholder, placeholderTextColor = '#263238CC', secureTextEntry, value, onChangeText}) {
    return (
      <TextInput 
              style={[style, styles.inputLogin]} 
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              secureTextEntry={secureTextEntry}
              value={value}
              onChangeText={onChangeText} />
    );
}

const styles = StyleSheet.create({
    inputLogin: {
      borderRadius: 8,
      borderColor: '#263238',
      borderWidth: 1,
      height: 56,
      fontSize: 16,
      marginTop: 15,
      paddingLeft: 12,
      backgroundColor: '#FFFFFF'
    },
  });