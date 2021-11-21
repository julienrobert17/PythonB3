import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useEffect, useState } from 'react';

import TopBarre from '../Components/TopBarre';
import Acceuil from '../Pages/AcceuilPage';
import Profil from '../Pages/ProfilPage';
import Map from '../Pages/MapPage';

function MainPage({ navigation, route }) {



    var [acceuil, setAcceuil] = useState(true);
    var [map, setMap] = useState(false);
    var [profil, setProfil] = useState(false);



    //Ce système permet de faire une single page en charge uniquement le Component qui est selectionné
    var Content = () => {
        if(acceuil){
            return(
                <Acceuil navigation={navigation}></Acceuil>
            );
        }
        else if(map){
            return(
                <Map navigation={navigation}></Map>
            );
        }
        else if(profil){
            return(
                <Profil navigation={navigation}></Profil>
            );
        }else{
            return(
                <View></View>
            )
        }

        
    }
    
        return (
            <View>

                

                <Content/>

                <View style={styles.container}>
                    <TopBarre navigation={navigation}/>
                </View>

            {/* NAVBARRE */}
                <View style={styles.containerNavBarre}>
                    <TouchableOpacity activeOpacity={1} onPress={() => LoadAcceuil()}>
                        <Image style={{height: 40, width: 40, opacity: 0.6, borderRadius: 100, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={require('../Images/rendezvous.jpg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => LoadMapPage()}>
                        <Image style={{height: 40, width: 42, opacity: 0.6, borderRadius: 100, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={require('../Images/map.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => LoadProfilPage()}>
                        <Image style={{height: 40, width: 40, opacity: 0.6, borderRadius: 100, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={require('../Images/trophe.jpg')}/>
                    </TouchableOpacity>
                </View>
            </View>
            
    
        )

        function LoadAcceuil(){
            setMap(false)
            setProfil(false)
            setAcceuil(true)
        }
        function LoadMapPage(){
            setAcceuil(false)
            setMap(true)
            setProfil(false)
        }
        function LoadProfilPage(){
            setAcceuil(false)
            setMap(false)
            setProfil(true)
        }
    }


const styles = StyleSheet.create({
    container: {
      height: 100,
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
      containerNavBarre: {
        width: '100%',
        height: 65,
        backgroundColor: 'white',
        position: 'absolute',
        top: Dimensions.get('window').height -30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopRightRadius: 19,
        borderTopLeftRadius: 19,
        elevation: 8,
    },
    containerAffiches: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
  })

  export default MainPage;

