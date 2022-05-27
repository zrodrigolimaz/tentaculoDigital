import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 11 : 32;

export default function Header () {
    return (
        <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.nomeUsuario}>Rodrigo Lima</Text>
            <Text style={styles.contaCorrente}>
                Conta Corrente
            </Text>
        </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#2393F7',
        paddingTop: 12,
        flexDirection:'row',
        paddingStart:16,
        paddingEnd:16,
        paddingBottom:12,
    },
    content: {
        flex: 1,
    padding: 20,
        
    },
    nomeUsuario:{
    fontSize:13,

    },
    contaCorrente: {
    color: '#464237',
    fontSize:24,
    fontWeight:'bold',
    }
})