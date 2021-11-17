import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';


function TopBarre(props) {

    var [utilisateurId, setUtilisateurId] = useState("");
    var [notif, setNotif] = useState(false);

    useEffect(() => {
        getValue()
    }, []);


    useEffect(() => {
        recupNotif()
    }, [utilisateurId]);

    async function getValue(){
        var _resultId = await SecureStore.getItemAsync('UtilisateurId')
        if(_resultId){
            setUtilisateurId(_resultId)
        }else{
            setUtilisateurId("")
        }

    }

    function recupNotif() {
        var uri = 'https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Message/GetNotification.php?UtilisateurId=' + utilisateurId
        fetch(uri)
        .then((response) => response.json())
        .then((data) => setNotif(data))
        
        setTimeout(recupNotif, 10000);
    }

        var Notif = () => {
            if(notif){
                return(
                    <View style={{height: 10, width: 10, borderRadius: 100, backgroundColor: 'red', position: 'absolute', top: 3, left: 3}}></View>
                );
            }else{
                return(
                    <View></View>
                )
            }

            
        }

        return (
            <View style={styles.containerNavBarre}>

                
                <Image style={{height: 50, width: 50, borderRadius: 100, marginLeft: 30, marginTop: 0, marginBottom: 10, backgroundColor: 'rgba(255, 255, 255, 0)',}} source={require('../Images/WeSportLogo.png')}/>                

                <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('MessageriePage')}>

                    {/* <View style={styles.logo}>
                        <Image style={{height: 45, width: 45, borderRadius: 100, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={{uri : "https://media.istockphoto.com/vectors/send-message-mail-icon-button-sign-paper-plane-navigation-logo-symbol-vector-id1227514358?k=6&m=1227514358&s=170667a&w=0&h=zK01wrL-BiUQIQv3JAEoUG2AdnDHE0JmWODhU6T2yNE="}}/>
                        <Notif/>
                    </View> */}

                    

                </TouchableOpacity>

            </View>
        )    
}

const styles = StyleSheet.create({
    containerTopBarre: {
        marginTop: 33,
    },
    containerNavBarre: {
        backgroundColor: 'white',
        borderBottomLeftRadius: 19, 
        borderBottomRightRadius: 19, 
        paddingTop: 33,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 5,
    },
    logo: {
        backgroundColor: 'white',
        height: 45, 
        width: 45, 
        borderRadius: 100, 
        margin: 8, 
        marginRight: 20, 
        elevation: 10, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,  
        alignItems: 'center'
    }
})


export default TopBarre