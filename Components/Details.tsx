import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar, Button, Alert, VirtualizedList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Details = ({ route, navigation}) => {
    const { itemId, itemTitle, itemCategory, itemPriority, itemPrice, itemDescription } = route.params;

    return (
        <View style={detailStyles.itemContainer}>
            <Text style={detailStyles.itemId}>Ton TAF n°{itemId}</Text>
            <Text style={detailStyles.itemTitle}>{itemTitle}</Text>
            <View style={detailStyles.categoryContainer}>
                <Text style={detailStyles.category}>Catégorie de TAF</Text>
                <Text style={detailStyles.itemCategory}>===></Text>
                <Text style={detailStyles.itemCategory}>{itemCategory}</Text>
            </View>
            <View style={detailStyles.priorityContainer}>
                <Text style={detailStyles.priority}>En terme de priorité</Text>
                <Text style={detailStyles.itemPriority}>===></Text>
                <Text style={detailStyles.itemPriority}>{itemPriority}</Text>
            </View>
            <View style={detailStyles.priceContainer}>
                <Text style={detailStyles.price}>Prévoir environ</Text>
                <Text style={detailStyles.itemPrice}>===></Text>
                <Text style={detailStyles.itemPrice}> {itemPrice}€</Text>
            </View>
            <Text style={detailStyles.description}>Une description rapide :</Text>
            <Text style={detailStyles.itemDescription}>{itemDescription}</Text>
            <View style={detailStyles.btn}>
                <Button title="Retour" onPress={() => navigation.goBack() } />
            </View>
        </View>
    )
}

const detailStyles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#313131',
    },
    itemId: {
        color: '#8b32fd',
        fontWeight: 'bold',
    },
    itemTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#8b32fd',
        textAlign: 'center',
        marginTop: 10,
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    category: {
        color: 'white',
        marginTop: 10,
        fontSize: 17,
    },
    itemCategory: {
        color: 'white',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 17,
    },
    priorityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    priority: {
        color: 'white',
        marginTop: 10,
        fontSize: 17,
    },
    itemPriority: {
        color: 'white',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 17,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        color: 'white',
        marginTop: 10,
        fontSize: 17,
    },
    itemPrice: {
        color: 'white',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 17,
    },
    description: {
        color: 'white',
        marginTop: 20,
        textAlign: 'center',
        fontSize: 17,
    },
    itemDescription: {
        color: 'white',
        margin: 10,
        fontSize: 17,
    },
    btn: {
      position: 'absolute',
      bottom: 5,
      width: '90%',
      left: 25,
    },
})

export default Details;