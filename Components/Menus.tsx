import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Menus = () => {
    return (
    <View style={styleMenu.containerM}>
        <Text style={styleMenu.title}>Trucs A Faire</Text>
        <Image
            source={require('../assets/images/taf.png')}
            style={{width: 50, height: 50}}
         />
    </View>
    );
};

const styleMenu = StyleSheet.create({
    containerM: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#efe2ec',
        padding: 5,
        borderRadius: 3,
        marginTop: 1,
    },
    title: {
        fontSize: 20,
        marginTop: 10,
    },
});

export default Menus;