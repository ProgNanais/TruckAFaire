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
    </SafeAreaView>
    );
};

const styleMenu = StyleSheet.create({
    containerM: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#313131',
        alignItems: 'center',
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 50,
        marginRight: 50,
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 10,
    },
    icon: {
        height: 40,
        width: 40,
    },
    separator: {
        marginVertical: 1,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Menus;