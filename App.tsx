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
  Alert,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menus from './Components/Menus';
import ListeTrucs from './Components/ListeTrucs';
import Formulaire from './Components/Formulaire';
import Details from './Components/Details';
import Navigator from './Components/Navigator';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>
                            Ici, on a des TRUCS À FAIRE !
                        </Text>
                    </View>
            <ListeTrucs />
            <View style={styles.btn}>
                <Button
                    title="Ajouter un TAF"
                    color="#8b32fd"
                    onPress={() => navigation.navigate('Formulaire')}
                />
            </View>
        </View>
    );
}

const Stack = createNativeStackNavigator();


function App( {navigation} ): JSX.Element {
  const Separator = () => <View style={styles.separator} />

  return (
  <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: (props) => <Menus {...props} />,
                    headerStyle: {
                        backgroundColor: '#313131',
                    },
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="Formulaire"
                component={Formulaire}
                options={{
                    title: 'Ajouter un Truc A Faire',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#313131',
                    },
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                     title: 'En détails',
                     headerTintColor: 'white',
                     headerStyle: {
                          backgroundColor: '#313131',
                     },
                     headerTitleAlign: 'center',
                }}
             />
        </Stack.Navigator>
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
    btn: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        left: 15,
        height: 50,
    }
});

export default App;
