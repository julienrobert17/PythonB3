import React from 'react';
import { StyleSheet, Text, FlatList, Button, TextInput, View, ScrollView, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

function Acceuil(props) {

        let [sports, setSports] = useState("");
        let [dateFin, setDateFin] = useState(new Date());
        let [dateDebut, setDateDebut] = useState(new Date());
        const [modeDebut, setModeDebut] = useState('date');
        const [modeFin, setModeFin] = useState('date');
        const [showDateDebut, setShowDateDebut] = useState(false);
        const [showDateFin, setShowDateFin] = useState(false);
        let [lieu, setLieu] = useState("");
        let [sportSelected, setSportSelected] = useState(0);

        let mounted = true;

        //Au lancement on récupere les différents sports que l'on peut selectionner
        useEffect(() => {
            if(mounted){
                fetch('https://hugocabaret.onthewifi.com/WeSport/API/requetes/Sport/GetSports.php')
                .then((response) => response.json())
                .then((data) => setSports(data)); 
            }
            return () => mounted = false;
        }, []);

        //Permet de superposer un symbole 'check' à l'image du sport pour montrer quel sport est selectionné
        let Check = ({ SportId }) => {
            if(SportId == sportSelected){
                return(
                    <View style={{backgroundColor: '#fff', width: 100, height: 100, borderRadius: 100, opacity: 0.7}}>
                        <ImageBackground style={{ width: 80, height: 80, margin: 10, borderRadius: 19}} imageStyle={{ borderRadius: 100}} source={{uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/480px-White_check.svg.png'}} resizeMode="cover">
                        </ImageBackground>
                    </View>
                )
            }else{
                return(
                    <View></View>
                )
            }
        }

        //Action de création d'un evenement puis redirection vers page d'acceuil
        function createEvenement(){
            fetch('https://hugocabaret.onthewifi.com/WeSport/API/requetes/Evenement/CreateEvenement.php?Lieu=' + lieu + "&HeureDebut=" + dateDebut + "&HeureFin=" + dateFin + "&CreateurId=1&SportId=" + sportSelected)
            props.navigation.pop()
        }
            

        //Affichage d'un sport
        let renderItemSport = ({ item }) => (
            <TouchableOpacity onPress={() => setSportSelected(item.SportId)} style={{backgroundColor: '#bbb', width: 100, height: 100, margin: 10, borderRadius: 100, }}>
                <ImageBackground style={{ width: 100, height: 100, borderRadius: 19, }} imageStyle={{ borderRadius: 100}} source={{uri : item.Image}} resizeMode="cover">
                    <Check SportId={item.SportId}/>
                </ImageBackground>

            </TouchableOpacity>
        );
    
        //Permet la selection des dates de début et de fin de l'evenement
        const onChangeDebut = (event, selectedDate) => {
            const currentDate = selectedDate || dateDebut;
            setShowDateDebut(Platform.OS === 'ios');
            setDateDebut(currentDate);
          };

          const onChangeFin = (event, selectedDate) => {
            const currentDate = selectedDate || dateFin;
            setShowDateFin(Platform.OS === 'ios');
            setDateFin(currentDate);
          };

        const showDebutMode = (currentMode) => {
            setShowDateDebut(true);
            setModeDebut(currentMode);
          };

          const showFinMode = (currentMode) => {
            setShowDateFin(true);
            setModeFin(currentMode);
          };
        
          const showDateDebutpicker = () => {
            showDebutMode('date');
          };
        
          const showTimeDebutpicker = () => {
            showDebutMode('time');
          };

          const showDateFinpicker = () => {
            showFinMode('date');
          };
        
          const showTimeFinpicker = () => {
            showFinMode('time');
          };
          

        return (

            <View style={{position: 'absolute', top: 0, width: '100%'}}>
                <ScrollView style={{height: 1000}}>

                    <TouchableOpacity style={{height: 60, width: 60, backgroundColor: '#aaa', borderRadius: 100, marginTop: 50, marginLeft: 20}} onPress={() => props.navigation.pop()}>
                        <ImageBackground style={{ width: 40, height: 40, transform: [{ rotate: '180deg'}], margin: 10, borderRadius: 19}} imageStyle={{ borderRadius: 100}} source={{uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/OOjs_UI_icon_arrowNext-ltr.svg/768px-OOjs_UI_icon_arrowNext-ltr.svg.png'}} resizeMode="cover">
                        </ImageBackground>
                    </TouchableOpacity>

                    <Text style={styles.title}>Créer un evenements</Text>

                    <Text style={styles.smalltitle}>Choisir le sport</Text>

                    {/* Liste des sports disponible */}
                    <FlatList style={{marginLeft: 'auto', marginRight: 'auto'}} data={sports} renderItem={renderItemSport} keyExtractor={item => item.Identifier} numColumns="3"/>

                    <Text style={styles.smalltitle}>Choisir les dates</Text>

                    
                    {/* Bouton de selection des dates */}
                    <View style={{flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto'}}>
                        <View style={styles.button}>
                            <Button onPress={showDateDebutpicker} title="Jour de début" />
                        </View>
                        <View style={styles.button}>
                            <Button onPress={showTimeDebutpicker} title="Heure de début" />
                        </View>
                    </View>
                    <Text style={{marginLeft: 'auto', marginRight: 'auto'}}>Date début : {JSON.stringify(dateDebut.toLocaleDateString() + " " + dateDebut.toLocaleTimeString())}</Text>



                    <View style={{flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto', marginTop: 30}}>
                        <View style={styles.button}>
                            <Button onPress={showDateFinpicker} title="Jour de fin" />
                        </View>
                        <View style={styles.button}>
                            <Button onPress={showTimeFinpicker} title="Heure de fin" />
                        </View>
                    </View>
                    <Text style={{marginLeft: 'auto', marginRight: 'auto'}}>Date fin : {JSON.stringify(dateFin.toLocaleDateString() + " " + dateFin.toLocaleTimeString())}</Text>

                    
                    <Text style={styles.smalltitle}>Choisir le lieu</Text>
                    {/* Selection du lieu */}
                    <View style={styles.input}>
                        <TextInput value={lieu} onChangeText={setLieu} placeholder={"Lieu"}/>
                    </View>

                    {showDateDebut && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={dateDebut}
                        mode={modeDebut}
                        is24Hour={true}
                        display="default"
                        onChange={onChangeDebut}
                        />
                    )}

                    {showDateFin && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={dateFin}
                        mode={modeFin}
                        is24Hour={true}
                        display="default"
                        onChange={onChangeFin}
                        />
                    )}

                        {/* Bouton de création */}
                    <TouchableOpacity onPress={() => createEvenement()} style={{backgroundColor: '#aaa', width: 200, height: 60, borderRadius: 100, marginRight: 'auto', marginLeft: 'auto'}}>
                        <Text style={{marginRight: 'auto', marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto'}}>Créer un évenement</Text>
                    </TouchableOpacity>

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
        fontSize: 30,
        marginLeft: 20,
        color: 'black',
        marginTop: 10
    },
    smalltitle: {
        fontSize: 20,
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
    },
    button: {
        width: 150,
        margin: 3
    },
    input: {
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        margin: 20,
        shadowOpacity: 1,
        shadowRadius: 8,

        backgroundColor: 'white',
        paddingLeft: 20,
        minWidth: 250,
        paddingVertical: 10,
        borderRadius: 100,
        marginTop: 20,
    },
  })

  export default Acceuil;

