import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

export default function ProfilPage(props){

    return(
        <View style={{position: 'absolute', top: 100, width: 380}}>
            <ScrollView style={{height: 900}}>
                <Text>Bienvenu sur le profil</Text>
                <View style={{height: 300}}></View>
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
        height: '100%',
      width: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        marginLeft: 10,
        color: 'black',
    },
  })