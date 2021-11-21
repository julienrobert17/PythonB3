import React from 'react';
import { StyleSheet, Text, FlatList, View, ScrollView, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';


function Acceuil(props) {

        let [evenements, setEvenements] = useState("");
        let [isMesEvenements, setIsMesEvenements] = useState(true);

        let mounted = true;

        //Au lancement, on charge les différents evenements
        useEffect(() => {
            if(mounted){
                fetch('https://hugocabaret.onthewifi.com/WeSport/API/requetes/Evenement/GetMyEvenements.php?UtilisateurId=1')
                .then((response) => response.json())
                .then((data) => setEvenements(data)); 
            }
            return () => mounted = false;
        }, []);

        //Affichage d'UN evenement
        let renderItemEvenement = ({ item }) => (
            <TouchableOpacity style={{backgroundColor: '#bbb', width: '95%', height: 150, margin: 10, borderRadius: 19, }}>
                <ImageBackground style={{ width: '100%', height: 150, borderRadius: 19, }} imageStyle={{ borderRadius: 15}} source={{uri : item.Image}} resizeMode="cover">
                    <Text style={styles.titleWhite}>{item.Nom}</Text>
                    <Text style={styles.lieu}>{item.Lieu}</Text>
                    <Text style={styles.date}>{item.HeureDebut}</Text>
                </ImageBackground>
            </TouchableOpacity>
        );

        //Affichage de mes evenements
        let MesEvenements = () => (
            <View>
                <Text style={styles.title}>Mes évènements</Text>

                <TouchableOpacity onPress={() => props.navigation.navigate('CreateEvenementPage')} style={{backgroundColor: '#DAE3F4', width: '95%', height: 100, margin: 10, borderRadius: 19, }}>
                    <Text style={{marginBottom: 'auto', marginTop: 'auto', marginLeft: 'auto', color: '#fff', marginRight: 'auto', fontSize: 60}}>+</Text>
                </TouchableOpacity>

                <FlatList data={evenements} renderItem={renderItemEvenement} keyExtractor={item => item.Identifier} numColumns="1"/>

            </View>
        );

        //Affichage des evenements publique
        let EvenementsPubliques = () => (
            <View>
                <Text style={styles.title}>Evènements publique</Text>

                <FlatList data={evenements} renderItem={renderItemEvenement} keyExtractor={item => item.Identifier} numColumns="1"/>
            </View>
        );

        //Selection entre l'affichage de nos evenement ou de evenements publiques
        let Evenements = () => {
            if(isMesEvenements){
                return(
                    <MesEvenements/>
                )
            }else{
                return(
                    <EvenementsPubliques/>
                )
            }
        }
    
        return (

            <View style={{position: 'absolute', top: 100, width: '100%'}}>
                <ScrollView style={{height: 700}}>

                    <Evenements/>

                    <View style={{height: 100}}></View>
                </ScrollView>

                <View style={{position: 'absolute', bottom: 0, width: '100%', height: 50, flexDirection: 'row', backgroundColor: '#DAE3F4', elevation: 3, borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
                    <View style={{width: '50%'}}>
                            <TouchableOpacity style={{height: 50}} onPress={() => setIsMesEvenements(true)}>
                                <Text style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto'}}>Mes évènements</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={{width: 1, backgroundColor: "black"}}></View>

                    <View style={{width: '50%'}}>
                        <TouchableOpacity style={{height: 50}} onPress={() => setIsMesEvenements(false)}>
                            <Text style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto'}}>Evènements publiques</Text>
                        </TouchableOpacity>
                    </View>
                </View>

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

