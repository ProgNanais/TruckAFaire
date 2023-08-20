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
import {NavigationContainer} from '@react-navigation/native';
import Menus from './Components/Menus';
import ListeTrucs from './Components/ListeTrucs';


function App(): JSX.Element {
  const Separator = () => <View style={styles.separator} />

  return (
  <NavigationContainer>
        <SafeAreaView style={styles.container}>

                <Menus style={styles.navigation} />
            <View>
                <Text style={styles.title}>
                    Ici, on a des TRUCS À FAIRE !
                </Text>
                <ListeTrucs />
            </View>
        </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#313131',
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        color: 'white',
        fontSize: 20,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default App;
