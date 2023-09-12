import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, StatusBar, Button, Alert } from 'react-native';



const Item = ({ title, category, priority, price, description }) => {
    return (
        <View>
            <Text style={{color: 'white'}}>{title}</Text>
            <Text style={{color: 'white'}}>{category}</Text>
            <Text style={{color: 'white'}}>{priority}</Text>
            <Text style={{color: 'white'}}>{price}</Text>
        </View>
    )
}

const TrucAFaire = [
    {
        id: 1,
        title: 'Planetarium',
        category: 'Visite',
        priority: 'ça urge',
        price: '25',
        description: 'Go à Saint Etienne en amoureuse, regardez les étoiles'
    },
    {
        id: 2,
        title: 'Peaugres',
        category: 'Visite',
        priority: 'Faiblement',
        price: '50',
        description: 'Allé en Ardèche en famille, à peaugres (avec ta cousine et bilou ?)'
    },
    {
        id: 3,
        title: 'Aller en Italie',
        category: 'Voyage',
        priority: 'Faiblement',
        price: '2000',
        description: 'Visitez l\'Italie (Région à définir ensemble) '
    }
]

const renderItem = ({ item }) => (
    <Item
        title={item.title}
        category={item.category}
        priority={item.priority}
        price={item.price}
    />
);

const ListeTrucs = () => {
    return (
        <View>
            <View style={styleListe.listeVide}>
                <Text style={styleListe.title}>Pas encore de truc à faire ?</Text>
            </View>
            <FlatList
            data={TrucAFaire}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
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