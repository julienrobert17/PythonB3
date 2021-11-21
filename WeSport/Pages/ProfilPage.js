import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { ScrollView } from 'react-native-gesture-handler';

export default function ProfilPage(props){

    //En cas de deconnexion on supprime les données locales
    function deconnexion(){
        SecureStore.deleteItemAsync('UtilisateurMail')
        SecureStore.deleteItemAsync('UtilisateurPassword')
        SecureStore.deleteItemAsync('UtilisateurId')
        props.navigation.navigate('ConnexionPage')
    }

    return(
        <View style={{position: 'absolute', top: 100, width: 380}}>
            <ScrollView style={{height: 700}}>
                <Text style={styles.title}>Profil</Text>

                <View style={styles.image}>
                    <ImageBackground style={{ width: 130, height: 130, marginTop: 30 }} imageStyle={{ borderRadius: 100}} source={{uri :'https://images.unsplash.com/photo-1632376472258-a2106f4f0227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}} resizeMode="cover">
                    </ImageBackground>
                    <Text style={{marginLeft: 'auto', marginRight: 'auto', fontSize: 20}}>Hugo Cabaret</Text>
                </View>

                <View style={{marginLeft: 'auto', backgroundColor: '#fff', borderRadius: 100, elevation: 5, padding: 10, marginRight: 'auto', marginTop: 80}}>
                    <Text style={styles.title}>Votre score: 20 000</Text>
                </View>

                <View style={{marginTop: 50, marginBottom: 80}}>
                    <TouchableOpacity style={{marginTop: 20, backgroundColor: 'white', elevation: 5, borderRadius: 100,paddingHorizontal: 20, paddingVertical: 10, marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto',}} onPress={() => deconnexion()}>
                        <Text>Déconnexion</Text>
                    </TouchableOpacity>
                </View>

                <View style={{height: 100}}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
    },
    image: {
        height: 130,
        width: 130,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    title: {
        fontSize: 25,
        marginLeft: 20,
        color: 'black',
    },
  })