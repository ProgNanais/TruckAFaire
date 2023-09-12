import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { View, Text, ScrollView, StyleSheet, Button, Alert, TextInput, Platform, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';

const Formulaire = ({navigation}) => {
    const [text, setText] = useState('');
    const [price, setPrice] = useState('');
    const [value, onChangeText] = React.useState('Tu veux en dire plus ?')
    const categorie = ["Voyage", "Visite", "Zoo", "Parc d'attraction", "Musée"]
    const priorite = ["Très fortement", "Fortement", "Moyennement", "Faiblement", "Très faiblement"]


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios'? 'padding' : 'position'}
            keyboardVerticalOffset={Platform.OS === 'ios'? 100 : -140}
            style={formulaireStyle.container}
        >
            <Text style={formulaireStyle.title}>
                Quel est ce TAF ?
            </Text>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={formulaireStyle.contentView}>
                    <TextInput
                        style={formulaireStyle.inputTitle}
                        placeholder="Tu veux faire quoi ?"
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
                    <TextInput
                        multiline
                        numberofLines={10}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        style={formulaireStyle.description}
                     />
                    <View style={formulaireStyle.btn}>
                        <Button
                            title="Valider"
                            color="#8b32fd"
                            onPress={() => navigation.navigate('Home')}
                        />
                    </View>
                 </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const formulaireStyle = StyleSheet.create({
    container: {
        flex:1,
    },
    title: {
        color: '#8b32fd',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 30,
        fontWeight: 'bold',
    },
    contentView: {
        flex: 1,
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
        marginRight: 30,
        marginLeft: 30,
        marginTop: 10,
        borderStyle: 'solid',
        borderColor: 'black',
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
        marginRight: 30,
        marginLeft: 30,
        marginTop: 10,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        width: '83.5%',
        height: 50,
    },
    inputTitleTwo: {
        marginRight: 30,
        marginLeft: 30,
        marginTop: 10,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        height: 50,
        textAlign: 'center',
        width: '83.5%',
    },
    description: {
        marginRight: 30,
        marginLeft: 30,
        marginTop: 10,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        minHeight: 50,
        textAlign: 'center',
        width: '83.5%',
    },
    btn: {
        height: 70,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
    },
});

export default Formulaire;