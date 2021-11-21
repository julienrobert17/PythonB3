import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, CheckBox, Text, TextInput, View, ImageBackground, TouchableOpacity } from 'react-native';
import bcrypt from 'react-native-bcrypt';

export default function ConnexionPage({navigation}) {

    var [mail, setMail] = useState("");
    var [motDePasse, setMotDePasse] = useState("");
    var [checkBox, setCheckBox] = useState(false);
    var [erreur, setErreur] = useState("");

    //Secure store permet de stocker de manière sécurisé et local des données, ici on l'utilise pour stocker l'Id de l'utilisateur
    async function save(key, value){
        await SecureStore.setItemAsync(key, value)
    }

    //Action de connexion
    function connect(){
        //On recup le mdp du mail associé ( si il existe)
        fetch('https://hugocabaret.onthewifi.com/WeSport/API/requetes/Utilisateur/GetIdentifiants.php?Mail=' + mail)
        .then((response) => response.json())
        .then((data) => {
            if(data == false){
                setErreur("Il doit y avoir une erreur dans vos identifiants")
            }else{
                //On verifi que le mdp correspond bien
                if(bcrypt.compareSync( motDePasse, data.Password)){
                    //Si la checkbox 'rester connecté' est coché, on stock en local les identifiants de l'utilsiateur, 
                    //puis on redirige vers la page d'acceuil
                    if(checkBox){
                        save('UtilisateurMail', mail)
                        save('UtilisateurPassword', motDePasse)
                        navigation.navigate('MainPage', {_isConnected: true})
                    }else{
                        navigation.navigate('MainPage', {_isConnected: false})
                    }
                    save('UtilisateurId', data.UtilisateurId)
                    
                }
                else{
                    fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Utilisateur/Connect.php?UtilisateurId=' + data.UtilisateurId + '&Success=0')
                    setErreur("Il doit y avoir une erreur dans vos identifiants")
                }
            }
        })
    }

    return(
        <View style={styles.container}>

            <ImageBackground imageStyle={{borderRadius: 100}} style={{marginBottom: 50, borderRadius: 100, marginLeft: 'auto', marginRight: 'auto', height: 100, width: 100}} source={require("../assets/icon.png")}/>

            <Text style={styles.title}>Connexion</Text>
            <Text>Sur la version Beta vous pouvez vous identifier avec le mail 'test' et le mdp 'test'</Text>

            {/* affiche l'erreur de connexion eventuelle */}
            <Text>{erreur}</Text>

            {/* Mail et MDP */}
            <View style={styles.input}>
                <TextInput keyboardType="email-address" value={mail} onChangeText={setMail} placeholder={"Adresse mail"}/>
            </View>
            <View style={styles.input}>
                <TextInput secureTextEntry={true} value={motDePasse} onChangeText={setMotDePasse} placeholder={"Mot de passe"}/>
            </View>

            {/* checkbox 'rester connecte' */}
            <View style={styles.inputCheckBox}>
                <CheckBox
                color={'red'}
                value={checkBox}
                onValueChange={setCheckBox}
                />
                <Text style={{marginBottom: 'auto', marginTop: 'auto'}}>Rester connecté ?</Text>
            </View>

            {/* bouton connexion */}
            <View style={styles.input}>
                <TouchableOpacity onPress={() => connect() }>
                    <Text style={{margin: 10, marginRight: 20, textAlign: 'center'}}>Connexion</Text>
                </TouchableOpacity>
            </View>

            <View style={{height: 100}}></View>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 50,
        backgroundColor: '#eee',
    },
    title: {
        fontSize: 40,
    },
    input: {
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 8,

        backgroundColor: 'white',
        paddingLeft: 20,
        minWidth: 250,
        paddingVertical: 10,
        borderRadius: 100,
        marginTop: 20,
    },
    inputDate: {
        flexDirection: "row",
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 8,

        backgroundColor: 'white',
        paddingLeft: 20,
        minWidth: 250,
        paddingVertical: 10,
        borderRadius: 100,
        marginTop: 20,
        justifyContent: 'space-around',
        paddingRight: 20,
    },
    inputImage: {
        height: 100,
        width: 100,
        elevation: 5,
        shadowColor: '#aaa',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 1,

        backgroundColor: 'white',
        borderRadius: 100,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 30,
    },
    inputCheckBox: {
        marginTop: 20,
        marginRight: 'auto',
        marginLeft: 'auto',
        flexDirection: 'row',
    },
})