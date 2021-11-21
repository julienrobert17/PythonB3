import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions  } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function MapPage(props){

    return(
        <View style={{position: 'absolute'}}>
            <ScrollView style={{height: 900}}>
                {/* Affichage de la map et des markers */}
                <MapView initialRegion={{
                            latitude: 48.8534,
                            longitude: 2.3488,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                            }} 
                        style={styles.map} >

                    <Marker
                        key={1}
                        coordinate={{latitude: 48.8524, longitude: 2.3498,}}
                        title="Jardin de notre dame de paris"
                        description="Pétanque"
                        />

                    <Marker
                        key={1}
                        coordinate={{latitude: 48.878, longitude: 2.38,}}
                        title="Parc des buttes Chaumont"
                        description="Course a pied"
                        />

                    <Marker
                        key={1}
                        coordinate={{latitude: 48.837, longitude: 2.33,}}
                        title="Montparnasse jardin"
                        description="Basket"
                        />

                    <Marker
                        key={1}
                        coordinate={{latitude: 48.863, longitude: 2.33,}}
                        title="Jardin du louvres"
                        description="Football"
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