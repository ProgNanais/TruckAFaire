/**
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  Alert
} from 'react-native';
import Menus from './Components/Menus';


function App(): JSX.Element {
  const Separator = () => <View style={styles.separator} />

  return (
    <SafeAreaView style={styles.container}>

            <Menus style={styles.navigation} />
        <View>
            <Text style={styles.title}>
                Ici, on a des TRUCKS A FAIRE !
            </Text>
            <Button
                title="Regardons ça !"
                onPress={() => Alert.alert('Pas encore de Truck à Faire ?')}
            />
            <Separator />
            <Text style={styles.title}>
                Ajoutons des Trucks à Faire non ?
            </Text>
            <Button
                title="Ajoutons ça !"
                onPress={() => Alert.alert('Malheureusement, tu n\'a plus de place !')}
            />
            <Separator />
            <View style={styles.fixToText}>
                <Button
                    title="Bouton de gauche"
                    onPress={() => Alert.alert('Rire de gauche')}
                />
                <Button
                    title="Bouton de droite"
                    onPress={() => Alert.alert('Rire de droite')}
                />
            </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#552264',
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        color: 'white',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default App;
