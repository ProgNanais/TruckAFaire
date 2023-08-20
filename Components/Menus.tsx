import React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView } from 'react-native';

const Menus = () => {
    return (
    <SafeAreaView>
    <View style={styleMenu.containerM}>
        <Image
            source={require('../assets/images/taff.png')}
            style={styleMenu.img}
         />
         <Text style={styleMenu.title}>Trucs À Faire</Text>
         <Image
            source={require('../assets/images/ajouter.png')}
            style={styleMenu.icon}
         />
    </View>
    <Text style={styleMenu.separator} />
    </SafeAreaView>
    );
};

const styleMenu = StyleSheet.create({
    containerM: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#313131',
        padding: 5,
        alignItems: 'center',
        marginTop: 5,
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 10,
        marginTop: 10,
    },
    icon: {
        height: 40,
        width: 40,
        margin: 5,
        marginTop: 10,
    },
    separator: {
        marginVertical: 1,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Menus;