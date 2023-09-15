import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableHighlight, Pressable, FlatList, StatusBar, Button, Alert, VirtualizedList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrucAFaire = [
    {
        id: 1,
        title: 'Planetarium',
        category: 'Visite',
        priority: 'ça urge',
        price: '25',
        description: 'Go à Saint Etienne en amoureuse, regardez les étoiles',
    },
    {
        id: 2,
        title: 'Peaugres',
        category: 'Visite',
        priority: 'Faible',
        price: '50',
        description: 'Allé en Ardèche en famille, à peaugres (avec ta cousine et bilou ?)',
    },
    {
        id: 3,
        title: 'Aller en Italie',
        category: 'Voyage',
        priority: 'Faible',
        price: '2000',
        description: 'Visitez l\'Italie (Région à définir ensemble)',
    },
    {
        id: 4,
        title: 'Aller en Grèce',
        category: 'Voyage',
        priority: 'Faible',
        price: '2000',
        description: 'Visitez l\'Italie (Région à définir ensemble)',
    },
    {
        id: 5,
        title: 'Aller à la Réunion',
        category: 'Voyage',
        priority: 'Faible',
        price: '2000',
        description: 'Visitez l\'Italie (Région à définir ensemble)',
    },
    {
        id: 6,
        title: 'Palais Idéal du facteur cheval',
        category: 'Visite',
        priority: 'Faible',
        price: '50',
        description: 'Go vers Romans visiter le palais idéal du facteur cheval',
    },
]

type ItemProps = {
    id: number,
    title: string,
    category: string,
    priority: string,
    price: number,
    description: string,
};

const Item = ({ id, title, category, priority, price, description }) => {
    const navigation = useNavigation();
    return (
        <TouchableHighlight onPress={() => navigation.navigate('Details', {
            itemId: id,
            itemTitle: title,
            itemCategory: category,
            itemPriority: priority,
            itemPrice: price,
            itemDescription: description,
            })}>

            <View style={styleListe.itemContainer}>
                <Text style={styleListe.itemTitle}>{title}</Text>
                <Text style={styleListe.itemCategory}>
                    <Text style={styleListe.category}>Catégorie:</Text>
                    <Text style={styleListe.categoryText}> {category}</Text>
                </Text>
                <Text style={styleListe.itemPriority}>
                    <Text style={styleListe.category}>Priorité:</Text>
                    <Text> {priority}</Text>
                </Text>
                <Text style={styleListe.itemPrice}>
                    <Text style={styleListe.category}>Budget à prévoir:</Text>
                    <Text> {price}€</Text>
                </Text>
            </View>
        </TouchableHighlight>
    )
}

const renderItem = ({ item }) => (
    <Item
        id={item.id}
        title={item.title}
        category={item.category}
        priority={item.priority}
        price={item.price}
        description={item.description}
    />
);

const ListeTrucs = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            {TrucAFaire.length === 0?
            <View style={styleListe.listeVide}>
               <Text style={styleListe.title}>Pas encore de truc à faire ?</Text>
            </View> :
                <FlatList
                    data={TrucAFaire}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={styleListe.liste}
                />}
        </SafeAreaView>
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
    itemContainer: {
        marginTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 5,
        borderBottomColor: '#8b32fd',
    },
    liste: {
        marginBottom: 100,
    },
    itemTitle: {
        color: '#8b32fd',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    itemCategory: {
        color: 'white',
    },
    category: {
        color: 'grey',
        textDecorationLine: 'underline',
    },
    categoryText: {
    },
    itemPriority: {
        color: 'white',
    },
    itemPrice: {
        color: 'white',
    },
});

export default ListeTrucs;