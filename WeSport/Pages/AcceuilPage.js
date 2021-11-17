import React from 'react';
import { StyleSheet, Text, FlatList, View, ScrollView, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';


function Acceuil(props) {

        let [evenements, setEvenements] = useState("");

        let mounted = true;

        useEffect(() => {
            if(mounted){
                fetch('https://hugocabaret.onthewifi.com/WeSport/API/requetes/Evenement/GetMyEvenements.php?UtilisateurId=1')
                .then((response) => response.json())
                .then((data) => setEvenements(data)); 
            }
            return () => mounted = false;
        }, []);

        let renderItemEvenement = ({ item }) => (
            <TouchableOpacity style={{backgroundColor: '#bbb', width: '95%', height: 150, margin: 10, borderRadius: 19, }}>
                <ImageBackground style={{ width: '100%', height: 150, borderRadius: 19, }} imageStyle={{ borderRadius: 15}} source={{uri : item.Image}} resizeMode="cover">
                    <Text style={styles.titleWhite}>{item.Nom}</Text>
                    <Text style={styles.lieu}>{item.Lieu}</Text>
                    <Text style={styles.date}>{item.HeureDebut}</Text>
                </ImageBackground>
            </TouchableOpacity>
        );
    
        return (

            <View style={{position: 'absolute', top: 100, width: '100%'}}>
                <ScrollView style={{height: 700}}>

                    <Text style={styles.title}>Evenements</Text>

                    <TouchableOpacity onPress={() => props.navigation.navigate('CreateEvenementPage')} style={{backgroundColor: '#bbb', width: '95%', height: 100, margin: 10, borderRadius: 19, }}>
                        <Text style={{marginBottom: 'auto', marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto', fontSize: 60}}>+</Text>
                    </TouchableOpacity>

                    <FlatList data={evenements} renderItem={renderItemEvenement} keyExtractor={item => item.Identifier} numColumns="1"/>

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
        height: '100%',
      width: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        marginLeft: 20,
        color: 'black',
        marginTop: 40
    },
    titleWhite: {
        fontSize: 25,
        marginLeft: 20,
        color: 'white',
    },
    date: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        color: 'white',
    },
    lieu: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: 'white',
    }
  })

  export default Acceuil;

