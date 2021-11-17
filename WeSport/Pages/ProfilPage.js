import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

export default function ProfilPage(props){

    return(
        <View style={{position: 'absolute', top: 100, width: 380}}>
            <ScrollView style={{height: 700}}>
                <Text style={styles.title}>Profil</Text>

                <View style={styles.image}>
                    <ImageBackground style={{ width: 130, height: 130, marginTop: 30 }} imageStyle={{ borderRadius: 100}} source={{uri :'https://lefruitdefendu.com/wp-content/uploads/2021/03/20180424_illu_cd_3697_exp-scaled.jpg'}} resizeMode="cover">
                    </ImageBackground>
                    <Text style={{marginLeft: 'auto', marginRight: 'auto', fontSize: 20}}>Hugo Cabaret</Text>
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