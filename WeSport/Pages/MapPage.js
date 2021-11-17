import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions  } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function MapPage(props){

    return(
        <View style={{position: 'absolute'}}>
            <ScrollView style={{height: 900}}>
                <MapView initialRegion={{
                            latitude: 48.8534,
                            longitude: 2.3488,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                            }} 
                        style={styles.map} >

                    <Marker
                        key={1}
                        coordinate={{latitude: 48.8534, longitude: 2.3488,}}
                        title="text"
                        description="autre"
                        />

                </MapView>
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