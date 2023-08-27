import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Alert } from 'react-native';

const ListeTrucs = () => {
    return (
        <ScrollView>
            <View style={styleListe.listeVide}>
                <Text style={styleListe.title}>Pas encore de truc à faire ?</Text>
            </View>
        </ScrollView>
    )
};

const styleListe = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'white',
        paddingBottom: 10,
        textAlign: 'center',
        marginTop: 100,
    },
});

export default ListeTrucs;