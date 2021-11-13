import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Logo from '../../assets/images/logo.svg';
export default function Login() {
    return (
        <View>
            <View style={styles.container}>
                <Logo style={styles.logo} />
                <Text style={styles.textLogo}>Recycash</Text>
            </View>
            <View style={styles.form}>
                <TextInput 
                style={styles.inputLogin} 
                placeholder="Digite seu e-mail"
                placeholderTextColor="#263238CC" />
                <TextInput 
                style={styles.inputLogin} 
                placeholder="Digite sua senha" 
                textContentType="password"
                placeholderTextColor="#263238CC"
                secureTextEntry={true} />

                <TouchableOpacity
                style={styles.buttonLogin}>
                    <Text style={styles.buttonLoginText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 136
    },
    logo: {
      
    },
    textLogo: {
      fontFamily: 'Mohave',
      fontSize: 72,
      lineHeight: 100,
      color: '#000000'
    },
    form: {
      paddingHorizontal: 70
    },
    inputLogin: {
      borderRadius: 8,
      borderColor: '#263238',
      borderWidth: 1,
      height: 56,
      fontSize: 16,
      marginTop: 15,
      paddingLeft: 12,
    },
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
      fontFamily: 'Mohave',
      fontSize: 18,
      lineHeight: 24,
      color: '#fff'
    }
  });
