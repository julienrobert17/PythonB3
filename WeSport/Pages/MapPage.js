import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions  } from 'react-native';
import MapView from 'react-native-maps';

export default function MapPage(props){

    return(
        <View style={{position: 'absolute'}}>
            <ScrollView style={{height: 900}}>
                <MapView style={styles.map} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
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