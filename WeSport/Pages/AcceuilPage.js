import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function Acceuil(props) {

        var headerFlatList = () => {


            return (
                <View>
                    <TouchableOpacity onPress={()=> alert('c\'est ici que vous pouvez voir qui sont les personnes avec qui vous avez des affinités, notre algorithme se fit sur vos réactions et celles des autres')}>
                        <Text style={styles.title}>Affinités</Text>
                    </TouchableOpacity>

                    

                    <TouchableOpacity onPress={() => alert('Ici vous pouvez avoir un aperçu général de toutes les affiches, les nouveautés etc.')}>
                        <Text style={styles.title}>News</Text>
                    </TouchableOpacity>
                </View>
                
            );

        };
    
        return (

            <View style={{position: 'absolute', top: 100}}>
                <Text>Acceuil</Text>
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
        fontSize: 25,
        marginLeft: 10,
        color: 'black',
      },
  })

  export default Acceuil;

