import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Alert, TextInput } from 'react-native';

const Formulaire = ({navigation}) => {
    const [text, setText] = useState('');
    return (
        <View>
            <Text style={formulaireStyle.title}>
                Quel est ce TAF ?
            </Text>
            <TextInput
                style={formulaireStyle.inputTitle}
                placeholder="Un petit nom sympa ?"
                defaultValue={text}
            />
        </View>
    )
}

const formulaireStyle = StyleSheet.create({
    title: {
        color: '#8b32fd',
        textAlign: 'center',
        marginTop: 20,
    },
    inputTitle: {
        marginRight: 30,
        marginLeft: 30,
        marginTop: 10,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        height: 40,
    }
});

export default Formulaire;