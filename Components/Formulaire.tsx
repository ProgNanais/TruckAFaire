import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { View, Text, ScrollView, StyleSheet, Button, Alert, TextInput } from 'react-native';

const Formulaire = ({navigation}) => {
    const [text, setText] = useState('');
    const [price, setPrice] = useState('');
    const categorie = ["Voyage", "Visite", "Zoo", "Parc d'attraction", "Musée"]
    const priorite = ["Très fortement", "Fortement", "Moyennement", "Faiblement", "Très faiblement"]


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
            <SelectDropdown
                data={categorie}
                defaultButtonText="Quelle sorte de super TAF ?"
                buttonStyle={formulaireStyle.selected}
                buttonTextStyle={formulaireStyle.textSelect}
                rowTextStyle={formulaireStyle.rowSelect}
                dropdownStyle={formulaireStyle.rowDroptown}
            />
            <SelectDropdown
                data={priorite}
                defaultButtonText="Ça urge ?"
                buttonStyle={formulaireStyle.selectedPriorite}
                buttonTextStyle={formulaireStyle.textSelect}
                rowTextStyle={formulaireStyle.rowSelect}
                dropdownStyle={formulaireStyle.rowDroptown}
            />
            <TextInput
                 style={formulaireStyle.inputTitleTwo}
                 placeholder="Une estimation du prix (€€) ?"
                 defaultValue={price}
                 inputMode="numeric"
            />
        </View>
    )
}

const formulaireStyle = StyleSheet.create({
    title: {
        color: '#8b32fd',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 30,
        fontWeight: 'bold',
    },
    inputTitle: {
        marginRight: 30,
        marginLeft: 30,
        marginTop: 10,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        height: 50,
        textAlign: 'center',
    },
    selected: {
        position: 'relative',
        borderStyle: 'solid',
        borderColor: 'black',
        left: 30,
        top: 10,
        borderRadius: 5,
        borderWidth: 1,
        width: '83.5%',
        height: 50,
    },
    textSelect: {
        color: 'rgba(75,75,75,0.5)',
        fontSize: 14,
    },
    rowDroptown: {
        width: '50%',
    },
    rowSelect: {
        color: 'rgba(75,75,75,0.7)',
        fontSize: 14,
    },
    selectedPriorite: {
        position: 'relative',
        borderStyle: 'solid',
        borderColor: 'black',
        left: 30,
        top: 20,
        borderRadius: 5,
        borderWidth: 1,
        width: '83.5%',
        height: 50,
    },
    inputTitleTwo: {
        position: 'relative',
        left: 30,
        top: 30,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        height: 50,
        textAlign: 'center',
        width: '83.5%',
    },
});

export default Formulaire;